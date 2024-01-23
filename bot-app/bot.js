import { Telegraf, Markup } from "telegraf";
import { message } from 'telegraf/filters';
import 'dotenv/config';

const { TELEGRAM_TOKEN, WEB_APP_URL } = process.env;
const bot = new Telegraf(TELEGRAM_TOKEN);

bot.command('start', ctx => {
    ctx.reply(
        'Welcome! Click Open App button below to start',
        Markup.keyboard([Markup.button.webApp('Send a message', `${WEB_APP_URL}/feedback`)]),
    );
});

bot.on(message('web_app_data'), async ctx => {
    const data = await ctx.webAppData.data.json();
    ctx.reply(`Your message: ${data?.feedback ?? 'empty message'}`);
});

bot.launch();
