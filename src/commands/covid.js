const Discord = require('discord.js')
const axios = require('axios')
const { virgulaPoints } = require('./commonFunctions')

exports.run = async (client, message, args) => {
    let msg = args.join(' ')


    axios.get('https://api.covid19api.com/dayone/country/brazil')  
    .then((res) => {


        let covid = client.emojis.cache.get('726626571179393097')

        let lastArr = res.data.pop()

        const embed = new Discord.MessageEmbed()

        .setColor('#990000')
        .setTitle(`${covid} Coronavírus BRASIL - STATUS `)
        .addField('Casos confirmados', virgulaPoints(lastArr.Confirmed.toString()))
        .addField('Mortes', virgulaPoints(lastArr.Deaths.toString()))
        .addField('Recuperados', virgulaPoints(lastArr.Recovered.toString()))
        .addField('Ativos', virgulaPoints(lastArr.Active.toString()))
        .setFooter(lastArr.Date)

        message.channel.send(embed)
        
    })  

}

