const Discord = require('discord.js')
const client = new Discord.Client()

const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn('RGAPI-05005c77-cdd4-43df-8f06-272ce39bfb35')({
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