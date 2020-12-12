require('dotenv').config()
const { Client, Collection } = require('discord.js')
const loadEvents = require('./functions/events')


const client = new Client()
client.event = new Collection()
client.commands = new Collection();

const { readdirSync } = require('fs');
const { join } = require('path');
const commandsDir = join(__dirname, ".", "commands");
const commandFiles = readdirSync(commandsDir).filter(file => file.endsWith('.js'))



for (let file = 0; file < commandFiles.length; file++) {
    const command = require(`./commands/${commandFiles[file]}`);
    client.commands.set(command.name, command);
}



const bot_token = process.env.BOT_TOKEN;


{ loadEvents.run(client); }


client.login(bot_token)
