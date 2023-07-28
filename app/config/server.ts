import md5 from "spark-md5";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OPENAI_API_KEY?: string;
      CODE?: string;
      BASE_URL?: string;
      PROXY_URL?: string;
      VERCEL?: string;
      HIDE_USER_API_KEY?: string; // disable user's api key input
      DISABLE_GPT4?: string; // allow user to use gpt-4 or not
      BUILD_MODE?: "standalone" | "export";
      BUILD_APP?: string; // is building desktop app
      HIDE_BALANCE_QUERY?: string; // allow user to query balance or not
    }
  }
}

const ACCESS_CODES = (function getAccessCodes(): Set<string> {
  const code = process.env.CODE;

  try {
    const codes = (code?.split(",") ?? [])
      .filter((v) => !!v)
      .map((v) => md5.hash(v.trim()));
    return new Set(codes);
  } catch (e) {
    return new Set();
  }
})();

export const getServerSideConfig = () => {
  if (typeof process === "undefined") {
    throw Error(
      "[Server Config] you are importing a nodejs-only module outside of nodejs",
    );
  }

  const apiKeys = (process.env.OPENAI_API_KEY ?? '').split(',')

  // Filter keys based on usage in the past minute
  const availableKeys = apiKeys.filter((key) => {
    const usage = keyUsage[key];
    if (!usage) {
      return true;
    }
    const timeElapsed = Date.now() - usage.timestamp;
    return timeElapsed >= 60 * 1000 || usage.count < 3;
  });

  const apiKey = availableKeys[Math.floor(Math.random() * availableKeys.length)] ?? '';

  // Update the usage record for the selected key
  const usage = keyUsage[apiKey];
  if (!usage) {
    keyUsage[apiKey] = { count: 1, timestamp: Date.now() };
  } else {
    if (Date.now() - usage.timestamp >= 60 * 1000) {
      // Reset the usage count after a minute
      usage.count = 1;
      usage.timestamp = Date.now();
    } else {
      usage.count += 1;
    }
  }

  
  return {
    apiKey,
    code: process.env.CODE,
    codes: ACCESS_CODES,
    needCode: ACCESS_CODES.size > 0,
    baseUrl: process.env.BASE_URL,
    proxyUrl: process.env.PROXY_URL,
    isVercel: !!process.env.VERCEL,
    hideUserApiKey: !!process.env.HIDE_USER_API_KEY,
    disableGPT4: !!process.env.DISABLE_GPT4,
    hideBalanceQuery: !!process.env.HIDE_BALANCE_QUERY,
  };
};
