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

    if(args[0]== 'x'){
    kayn.CurrentGame.by.summonerID('3zApc-QEkDKl-UtU23vbz1UwuWIYgMSe54yZkuu3UmsjCps')
    .region(REGIONS.BRAZIL)
    .callback(function(err, CurrentGame) {
        console.log(CurrentGame)

        
    })
}
}
