const axios = require('axios')

exports.run = async (client, message, args) => {

    const url = `https://api.thecatapi.com/v1/images/search`
    const json = await axios.get(url)
    const response = json.data

    message.channel.send(response[0].url)

}