const Discord = require('discord.js')
const client = new Discord.Client()
const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn(process.env.RGAPI_KEY)({
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
