require('dotenv').config();
const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Hello world"));

bot.hears('ola', (ctx) => ctx.reply('tchau'))

bot.on('text', (ctx) => {
  console.log(ctx.message.text, ctx.from, ctx.chat);
  return ctx.reply('Recebi um texto');
});


bot.on('location', (ctx) => {
  console.log(ctx.message);
  return ctx.reply('Recebi uma localização');
});


bot.launch();