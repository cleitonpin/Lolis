
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
    
    if(args[0]== 'cham')
    {
        kayn.Matchlist.by.accountID('AzhYVKv_aUyJFdfcQixW3_F5t6qzyuE8pMREAhAk5eZNsN0')
        .callback(function(error, Matchlist) {
        console.log(Matchlist['startIndex'])
        message.channel.send(Matchlist['endIndex'])

    })
}
}