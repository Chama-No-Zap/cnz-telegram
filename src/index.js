require('dotenv').config();
const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Olá, poderia me confirmar se seu nome é ${ctx.from.first_name} ${ctx.from.last_name}?`));

bot.hears('ola', (ctx) => ctx.reply(`Olá ${ctx.from.first_name}?`))

bot.hears('Sim', (ctx) => ctx.reply(`Prazer, ${ctx.from.first_name}, preciso que você insira o CNPJ do seu negócio :)`));

bot.on('text', (ctx) => {
  console.log(ctx.message.text, ctx.from, ctx.chat);
  return ctx.reply('Agora digite o nome fantasia do seu negócio');
});


bot.on('location', (ctx) => {
  console.log(ctx.message);
  return ctx.reply('Recebi uma localização');
});


bot.launch();
