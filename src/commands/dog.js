const axios = require('axios')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const url = `https://random.dog/woof.json`
    const json = await axios.get(url)
    const response = json.data

    //let random = Math.floor(Math.random() * 150)
    message.delete()
    message.channel.send(response.url)

}