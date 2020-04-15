const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('../kayn')
const { Freeweek } = require('./commonFunctions')

exports.run = async (client, message, args) => {
        kayn.kaynObject.Champion.Rotation.list()
        .region(kayn.regions.BRAZIL)
        .callback(function(error, Champion) {
            console.log(Champion['freeChampionIds'])
            //pegar nome dos champs
        

            const freerotarions = new Discord.RichEmbed()
            .setColor('#170B3B')
            .setTitle('***Rotação semanal de campeões***')
            .addField('**\u200b**', '\u200b')
            .addField(`${Freeweek(client,Champion.freeChampionIds[0])}${Freeweek(client,Champion.freeChampionIds[1])}${Freeweek(client,Champion.freeChampionIds[2])}${Freeweek(client,Champion.freeChampionIds[3])}${Freeweek(client,Champion.freeChampionIds[4])}${Freeweek(client,Champion.freeChampionIds[5])}${Freeweek(client,Champion.freeChampionIds[6])}${Freeweek(client,Champion.freeChampionIds[7])}`, `\u200b`, true)
            .addField(`${Freeweek(client,Champion.freeChampionIds[8])}${Freeweek(client,Champion.freeChampionIds[9])}${Freeweek(client,Champion.freeChampionIds[10])}${Freeweek(client,Champion.freeChampionIds[11])}${Freeweek(client,Champion.freeChampionIds[12])}${Freeweek(client,Champion.freeChampionIds[13])}${Freeweek(client,Champion.freeChampionIds[14])}`, `\u200b`, true)
            .setThumbnail('https://opgg-static.akamaized.net/images/gnb/img/icon-navi-lol.png')
            message.channel.send(freerotarions)
        })
}
