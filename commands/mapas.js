const Discord = require('discord.js')
const client = new Discord.Client()

exports.run = async (client, message, args) => {
        const embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setThumbnail('')
        .setTitle('Comandos para exibir os mapas')
        .addField('**Twisted Treeline**', '[mapa 1')
        .addField('**Summoner;s Rift**', '[mapa 2')
        .addField('**Howling Abyss**', '[mapa 3')
        .addField('**Teamfight Tactics**', '[mapa 4')
        message.channel.send(embed)

}
