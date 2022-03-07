const discord = require('discord.js');
const client = new discord.Client({ intents: 32767 });
const { TOKEN } = require('./config/config.json');
client.once('ready', () =>{
    console.log('Bot is online!')
});

client.login(TOKEN);