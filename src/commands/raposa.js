const axios = require('axios')

module.exports = {

    name: 'raposa',
    aliases: ['fox'],
    async execute(client, message, args) {
        const url = `https://randomfox.ca/floof/`
        const json = await axios.get(url)
        const response = json.data
    
        //let random = Math.floor(Math.random() * 150)
    
        message.channel.send(response.image)
    }

}