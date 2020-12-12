const axios = require('axios')

module.exports = {

    name: 'gato',
    aliases: ['cat'],
    async execute(client, message, args) {
        const url = `https://api.thecatapi.com/v1/images/search`
        const json = await axios.get(url)
        const response = json.data
        
        message.channel.send(response[0].url)
    }

}