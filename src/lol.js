require('dotenv').config()
const { Client, Collection } = require('discord.js')
const loadEvents = require('./functions/events')


const client = new Client()
client.event = new Collection()
const bot_token = process.env.BOT_TOKEN;


{ loadEvents.run(client); }


client.login(bot_token)
