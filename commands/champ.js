
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
        userID=""
        kayn.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            userID = summoner['id']
        })
    }
    if(args[0])
    {
        
        kayn.ChampionMastery.get(userID)('107')
        .callback(function(error, ChampionMastery) {
        console.log(ChampionMastery[0])

        

    })
}
}