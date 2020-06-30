const Discord = require('discord.js')
const Covid = require('../api/covid19')
const { virgulaPoints } = require('./commonFunctions')

exports.run = async (client, message, args) => {
    

    let covid = client.emojis.cache.get('726626571179393097')
    let response = await Covid.data()
    let lastArr = response.pop()
    const embed = new Discord.MessageEmbed()
        .setColor('#990000')
        .setTitle(`${covid} Coronavírus BRASIL - STATUS `)
        .addField('Casos confirmados', virgulaPoints(lastArr.Confirmed.toString()), true)
        .addField('Mortes', virgulaPoints(lastArr.Deaths.toString()), true)
        .addField('Recuperados', virgulaPoints(lastArr.Recovered.toString()), true)
        .addField('Ativos', virgulaPoints(lastArr.Active.toString()), true)
        .setFooter(lastArr.Date)

    message.channel.send(embed)
        
    

}

