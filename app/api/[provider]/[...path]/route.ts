import { ApiPath } from "@/app/constant";
import { NextRequest } from "next/server";
import { handle as openaiHandler } from "../../openai";
import { handle as azureHandler } from "../../azure";
import { handle as googleHandler } from "../../google";
import { handle as anthropicHandler } from "../../anthropic";
import { handle as baiduHandler } from "../../baidu";
import { handle as bytedanceHandler } from "../../bytedance";
import { handle as alibabaHandler } from "../../alibaba";
import { handle as moonshotHandler } from "../../moonshot";
import { handle as stabilityHandler } from "../../stability";
import { handle as iflytekHandler } from "../../iflytek";
import { handle as deepseekHandler } from "../../deepseek";
import { handle as siliconflowHandler } from "../../siliconflow";
import { handle as xaiHandler } from "../../xai";
import { handle as chatglmHandler } from "../../glm";
import { handle as proxyHandler } from "../../proxy";
import { handle as ai302Handler } from "../../302ai";

async function handle(
  req: NextRequest,
  { params }: { params: Promise<{ provider: string; path: string[] }> },
) {
  const resolvedParams = await params;
  const apiPath = `/api/${resolvedParams.provider}`;
  console.log(`[${resolvedParams.provider} Route] params `, resolvedParams);
  switch (apiPath) {
    case ApiPath.Azure:
      return azureHandler(req, { params: resolvedParams });
    case ApiPath.Google:
      return googleHandler(req, { params: resolvedParams });
    case ApiPath.Anthropic:
      return anthropicHandler(req, { params: resolvedParams });
    case ApiPath.Baidu:
      return baiduHandler(req, { params: resolvedParams });
    case ApiPath.ByteDance:
      return bytedanceHandler(req, { params: resolvedParams });
    case ApiPath.Alibaba:
      return alibabaHandler(req, { params: resolvedParams });
    // case ApiPath.Tencent: using "/api/tencent"
    case ApiPath.Moonshot:
      return moonshotHandler(req, { params: resolvedParams });
    case ApiPath.Stability:
      return stabilityHandler(req, { params: resolvedParams });
    case ApiPath.Iflytek:
      return iflytekHandler(req, { params: resolvedParams });
    case ApiPath.DeepSeek:
      return deepseekHandler(req, { params: resolvedParams });
    case ApiPath.XAI:
      return xaiHandler(req, { params: resolvedParams });
    case ApiPath.ChatGLM:
      return chatglmHandler(req, { params: resolvedParams });
    case ApiPath.SiliconFlow:
      return siliconflowHandler(req, { params: resolvedParams });
    case ApiPath.OpenAI:
      return openaiHandler(req, { params: resolvedParams });
    case ApiPath["302.AI"]:
      return ai302Handler(req, { params: resolvedParams });
    default:
      return proxyHandler(req, { params: resolvedParams });
  }
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
export const preferredRegion = [
  "arn1",
  "bom1",
  "cdg1",
  "cle1",
  "cpt1",
  "dub1",
  "fra1",
  "gru1",
  "hnd1",
  "iad1",
  "icn1",
  "kix1",
  "lhr1",
  "pdx1",
  "sfo1",
  "sin1",
  "syd1",
];
