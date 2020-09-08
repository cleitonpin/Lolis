const Discord = require('discord.js')
const axios = require("axios")

exports.run = async(client, message, args) => {

    let name = args.join(' ').toLowerCase() 
    let data = await getDataRunes().catch(err => {})
    let embed = new Discord.MessageEmbed()

    
    let info = data.filter(names => names.name.toLowerCase() == name)

    if(info == '') {
        embed.setColor('#170B3B')
        .setTitle('Comando Runas')
        .setDescription('O nome informado **não existe**!')
        .setFooter('Utilize :runa [nomedaruna]')
    } else {

        embed.setColor('#170B3B')
        .setTitle('Comando Runas')
        .addField(`Nome`, info[0].name)
        .addField(`Descrição`, info[0].description)
        .setThumbnail(info[0].image_url)
    }


    message.channel.send(embed)

}


getDataRunes = async () => {
    const url = `https://morelegends.com/pt/api/static_data`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data.runes
}
