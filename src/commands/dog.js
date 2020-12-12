const axios = require('axios')

module.exports = {
    name: 'dog',
    aliases: ['cachorro', 'cao'],
    async execute (client, message, args) {
        const url = `https://random.dog/woof.json`
        const json = await axios.get(url)
        const response = json.data
        
        //let random = Math.floor(Math.random() * 150)
        message.delete()
        message.channel.send(response.url)
    }

}