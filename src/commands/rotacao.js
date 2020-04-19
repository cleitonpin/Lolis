const Discord = require('discord.js')
const kayn = require('../kayn')
const { getChampionEmoji, IDtoName } = require('./commonFunctions')

exports.run = async (client, message, args) => {
        kayn.kaynObject.Champion.Rotation.list()
        .region(kayn.regions.BRAZIL)
        .callback(function(error, Champion) {
            console.log(Champion['freeChampionIds'])
            //pegar nome dos champs
            let emoji = client.emojis.cache.get('700901486619656232')

            const freerotarions = new Discord.MessageEmbed()
            .setColor('#170B3B')
            .setTitle(`${emoji} Rotação semanal grátis de campeões`) 
            
            .addField(`\u200b`, `${getChampionEmoji(client,Champion.freeChampionIds[0])} **${IDtoName(Champion.freeChampionIds[0])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[1])} **${IDtoName(Champion.freeChampionIds[1])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[2])} **${IDtoName(Champion.freeChampionIds[2])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[3])} **${IDtoName(Champion.freeChampionIds[3])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[4])} **${IDtoName(Champion.freeChampionIds[4])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[5])} **${IDtoName(Champion.freeChampionIds[5])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[6])} **${IDtoName(Champion.freeChampionIds[6])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[7])} **${IDtoName(Champion.freeChampionIds[7])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[8])} **${IDtoName(Champion.freeChampionIds[8])}**`, true)
            .addField(`\u200b`, `${getChampionEmoji(client,Champion.freeChampionIds[9])} **${IDtoName(Champion.freeChampionIds[9])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[10])} **${IDtoName(Champion.freeChampionIds[10])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[11])} **${IDtoName(Champion.freeChampionIds[11])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[12])} **${IDtoName(Champion.freeChampionIds[12])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[13])} **${IDtoName(Champion.freeChampionIds[13])}** \n ${getChampionEmoji(client,Champion.freeChampionIds[14])} **${IDtoName(Champion.freeChampionIds[14])}**`, true)
            .setThumbnail('https://opgg-static.akamaized.net/images/gnb/img/icon-navi-lol.png')
            message.channel.send(freerotarions)
        })
}
