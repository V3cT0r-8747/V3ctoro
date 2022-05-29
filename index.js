//prerequisites
const fs = require('node:fs');
const path = require('node:path');
const { Client, Intents } = require('discord.js'); //gets discord.js
const { token, clientId, guildId } = require('./config.json');  //gets token from config.json

// Create a client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//event handling
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);

    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Login to Discord with your client's token
client.login(token);
