const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('./kayn')

exports.run = async (client, message, args) => {
    if(args[0] == '1'){
        kayn.DDragon.Map.list()
        .region(REGIONS.BRAZIL)
        .callback(function(err, Map) {
            console.log(Map)
            const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle(Map['data']['10']['MapName'])
            .setImage(`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/map/map10.png`)
            message.channel.send(embed)
        })
    }
    else if(args[0] == '2'){
        kayn.DDragon.Map.list()
        .region(REGIONS.BRAZIL)
        .callback(function(err, Map) {
            console.log(Map)
            const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle(Map['data']['11']['MapName'])
            .setImage(`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/map/map11.png`)
            message.channel.send(embed)
        })
    }
    else if(args[0] == '3'){
        kayn.DDragon.Map.list()
        .region(REGIONS.BRAZIL)
        .callback(function(err, Map) {
            console.log(Map)
            const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle(Map['data']['12']['MapName'])
            .setImage(`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/map/map12.png`)
            message.channel.send(embed)
        })
    }
    else if(args[0] == '4'){
        kayn.DDragon.Map.list()
        .region(REGIONS.BRAZIL)
        .callback(function(err, Map) {
            console.log(Map)
            const embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle(Map['data']['22']['MapName'])
            .setImage(`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/map/map22.png`)
            message.channel.send(embed)
        })
    }
    else{
        message.channel.send('**Digite a numeração (1-4)**')
    }
}
