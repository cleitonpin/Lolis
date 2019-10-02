const Discord = require('discord.js')
const client = new Discord.Client()
const key = require('./Update.json')
const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn(key.key)({
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
        kayn.DDragon.Champion.get(`${args[0]}`).region('br')
        .version('9.19.1') /* Explicit */
        .callback(function(error, champion) {
        console.log(champion)

        const embed = new Discord.RichEmbed()
        .setColor('#330000')
        .addField(`**${args[0]}**`, champion['data'][`${args[0]}`]['title'])
        .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_0.jpg`)
        message.channel.send(embed)
        message.channel.send(champion['data'][`${args[0]}`]['lore'])
    })
    }

    
}
