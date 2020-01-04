const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('./kayn')

exports.run = async (client, message, args) => {
    if(args[0]){
        kayn.Summoner.by.name(`${args[0]}`)
        .region(REGIONS.BRAZIL)
        .callback(function(err, summoner) {
            console.log(summoner)
            const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .addField('**Nome do invocador: **', summoner['name'])
            .addField('**LeveI do invocador:**', summoner['summonerLevel'])
            .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/profileicon/${summoner['profileIconId']}.png`)
            message.channel.send(embed)
        })
    }
    else{
        message.channel.send('**Digite o nome do jogador!**')
    }
}
