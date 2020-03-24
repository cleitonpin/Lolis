const { Kayn, REGIONS } = require('kayn')

module.exports = {
    kaynObject: Kayn(process.env.RGAPI_KEY)({
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
    }),
    regions: REGIONS
}