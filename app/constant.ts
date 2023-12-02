export const OWNER = "ClarenceDan";
export const REPO = "Aivesa-Chat";
export const REPO_URL = `https://sourl.cn/vCDKuc`;
export const ISSUE_URL = `https://sourl.cn/vCDKuc`;
export const UPDATE_URL = `https://sourl.cn/vCDKuc`;
export const RELEASE_URL = `https://sourl.cn/vCDKuc`;
export const FETCH_COMMIT_URL = `https://sourl.cn/vCDKuc`;
export const FETCH_TAG_URL = `https://sourl.cn/vCDKuc`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_CORS_HOST = "https://a01.aipua.icu";
export const DEFAULT_API_HOST = "api.openai.com";
export const USER_API_HOST = "api.openai.com";

// constants.ts
export const UNAUTHORIZED_TEXT = `
### 🍀 欢迎使用 Aivesa Chat
🚗 本站支持免费 **GPT-4** 和 **讯飞星火** ，欢迎在设置中切换后体验！\n\n
🚀 本免费 **GPT-4** 已暂时恢复，欢迎分享给好友一起来玩！\n\n
👉 领取 **[支付宝无门槛红包](https://sourl.cn/awAFV5)** ，每天可领一次，帮助 Aivesa 回血一波！\n\n

**提问：** 如何免费使用？\n 
**回答：** 前往公众号：**[Aivesa](https://sourl.cn/3Gg3kc)** 回复 **密码** 免费获取密码，然后👉 **[点击这里](/#/auth)** 输入密码后解锁**免费使用**。\n\n 
---
**提问：** 偶尔无法使用？\n 
**回答：** 当前模型用量较高，到设置换个模型试试？\n\n
**提问：** 怎么使用插件？\n
**回答：** 在设置中开启插件，然后在聊天框点亮即可，当前支持联网，计算器和百科插件.\n\n
---
**推荐：** **[Aivesa Pro](https://aivesa.cn/)** ，支持绘画 [👉点这里使用 Pro 版本](https://aivesa.cn/) \n\n 
常见问题与使用说明点击查看👉 **[Aivesa产品简介](https://sourl.cn/uTB6WS)** \n\n
防失联请加群 🐧 [QQ频道](https://sourl.cn/XFbJKM) 或 🚀 [TG群组](https://t.me/+gJ-GQFE1GN40NGJl)\n\n 
推荐给好友？请推荐主站：**[aivesa.cn](https://aivesa.cn)** 落地站随时切换\n\n 
通知更新时间：2023.12.02 15:00
`;


export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Plugins = "/plugins",
  Auth = "/auth",
}

export enum ApiPath {
  Cors = "/api/cors",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Plugins = "plugins.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Plugin = "plugin-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
You are Aivesa, a large language model trained by OpenAI.
Knowledge cutoff: 2023-04
Current model: {{model}}
Current time: {{time}}`;

export const SUMMARIZE_MODEL = "gpt-3.5-turbo";

export const DEFAULT_MODELS = [
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0301",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0613",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-1106",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k-0613",
    available: true,
  },
  {
    name: "gpt-4",
    available: true,
  },
  {
    name: "gpt-4-0314",
    available: true,
  },
  {
    name: "gpt-4-0613",
    available: true,
  },
  {
    name: "gpt-4-1106-preview",
    available: true,
  },
  {
    name: "gpt-4-vision-preview",
    available: true,
  },
  {
    name: "SparkDesk",
    available: true,
  },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
