const axios = require('axios')
const Discord = require('discord.js')

module.exports = {
    
    name: 'fatos',
    aliases: ['facts', 'facts-cats'],
    async execute(client, message, args) {
        const url = `https://cat-fact.herokuapp.com/facts`
        const json = await axios.get(url)
        const response = json.data
        let random = Math.floor(Math.random() * response.length)        
    
        message.channel.send(response[random].text)
    }

}