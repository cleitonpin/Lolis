const axios = require('axios')
const Discord = require('discord.js')




exports.run = async (client, message, args) => {


    
    
    const url = `https://br.op.gg/statistics/ajax2/champion/`
    const json = await axios.get(url)
    const response = json.data
    console.log(response)



    // const url = `https://cat-fact.herokuapp.com/facts`
    // const json = await axios.get(url)
    // const response = json.data

    // let random = Math.floor(Math.random() * 150)

    // message.channel.send(response.all[random].text)

}