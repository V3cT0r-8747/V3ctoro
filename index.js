//prerequisites
const { Client, Intents } = require('discord.js'); //gets discord.js
const { token } = require('./config.json');  //gets token from config.json

// Create a client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//checks if client is ready to go
client.once('ready', () => {
    console.log('Ready to go!');
    client.user.setActivity('avoiding death by code'); //sets custom status
});
// Login to Discord with your client's token
client.login(token);
