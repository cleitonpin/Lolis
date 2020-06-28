const Discord = require('discord.js')
const axios = require('axios')
const api_key = 'kY1kPy0oRuVOBJx5qf20boedRHZumTT6'

exports.run = async (client, message, args) => {

    
    let msg = args.join(' ')

    const url = `http://api.giphy.com/v1/gifs/search?q=${msg}&api_key=${api_key}&lang=pt&rating=r`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    
    
    if(data.data == '') return message.channel.send('GIF não encontrado')
    
    let numberRandom = data.pagination.count
    let random = Math.floor(Math.random() * numberRandom)
    let giph = data.data[random].images.original.url
    

    message.channel.send(giph)
    console.log(data.data[random].images.original)

}

