const Discord = require('discord.js')
const client = new Discord.Client()
const tft = require('../../api/league-tft')
const versions = require('../../api/versions')


exports.run = async (client, message, args) => {
    //const emojiList = client.emojis.get("624323979619991582")
    
    console.log(await versions.data())
    

}

