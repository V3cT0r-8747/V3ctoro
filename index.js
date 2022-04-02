//prerequisites
const { Client, Intents } = require('discord.js'); //gets discord.js
const { token, clientId, guildId } = require('./config.json');  //gets token from config.json

const commands = ['ping', 'server', 'user'];
// Create a client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//checks if client is ready to go
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activities: [{ name: 'beep-boop, being worked on rn' }], status: 'online' }); //sets activity/status
});

// Login to Discord with your client's token
client.login(token);
