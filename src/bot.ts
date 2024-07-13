import { type ChatMembersFlavor } from "@grammyjs/chat-members";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";
import { hydrateReply, parseMode } from "@grammyjs/parse-mode";
import { Bot, Context, InlineKeyboard } from "grammy";
import { generateUpdateMiddleware } from "telegraf-middleware-console-time";

type MyContext = Context & ChatMembersFlavor;

const token = process.env.TELEGRAM_API_TOKEN;
if (!token) throw new Error("TELEGRAM_API_TOKEN is unset");

// https://api.telegram.org/bot<token>/deleteWebhook
// https://api.telegram.org/bot<token>/setWebhook?url=https://<domain>/api/bot&allowed_updates=%5B%22chat_member%22%2C%22edited_message%22%2C%22channel_post%22%2C%22edited_channel_post%22%2C%22inline_query%22%2C%22chosen_inline_result%22%2C%22callback_query%22%2C%22shipping_query%22%2C%22pre_checkout_query%22%2C%22poll%22%2C%22poll_answer%22%2C%22my_chat_member%22%2C%22chat_member%22%2C%22chat_join_request%22%2C%22message%22%5D

export const bot = new Bot<ParseModeFlavor<MyContext>>(token, {});

bot.use(hydrateReply);
bot.use(generateUpdateMiddleware());
bot.api.config.use(parseMode("HTML"));
