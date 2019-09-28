const Discord = require('discord.js')
const client = new Discord.Client()

const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn('RGAPI-2179202a-1c74-4e4f-b2e9-ff3a4f884802')({
    region: REGIONS.BRAZIL,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'pt_BR',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
})

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
        message.channel.send('Digite de 1, 2, 3 ou 4')
    }
}
