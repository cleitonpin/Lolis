'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Endpoint = require('../Endpoint');

var _Endpoint2 = _interopRequireDefault(_Endpoint);

var _Request = require('../RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _methodNames = require('../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SummonerEndpointV4 extends _Endpoint2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.by = {
            accountID: this.accountID.bind(this),
            name: this.summonerName.bind(this),
            puuid: this.puuid.bind(this),
            id: this.summonerID.bind(this)
        };

        this.serviceName = 'summoner';

        this.limiter = limiter;
    }

    /**
     * Get a summoner by account ID.
     *
     * Implements GET `/lol/summoner/v4/summoners/by-account/{encryptedAccountId}`.
     *
     * @param {string} accountID - The account ID of the summoner.
     */
    accountID(accountID) {
        return new _Request2.default(this.config, this.serviceName, `summoners/by-account/${accountID}`, _methodNames2.default.SUMMONER.GET_BY_ACCOUNT_ID_V4, 'GET', this.limiter, null, false, 4);
    }

    /**
     * Get a summoner by summoner name.
     *
     * Implements GET `/lol/summoner/v4/summoners/by-name/{summonerName}`.
     *
     * @param {string} summonerName - The name of the summoner.
     */
    summonerName(summonerName) {
        return new _Request2.default(this.config, this.serviceName, `summoners/by-name/${encodeURI(summonerName)}`, _methodNames2.default.SUMMONER.GET_BY_SUMMONER_NAME_V4, 'GET', this.limiter, null, false, 4);
    }

    /**
     * Get a summoner by summoner puuid.
     *
     * Implements GET `/lol/summoner/v4/summoners/by-puuid/{encryptedPUUID}`.
     *
     * @param {string} puuid - The puuid of the summoner.
     */
    puuid(puuid) {
        return new _Request2.default(this.config, this.serviceName, `summoners/by-puuid/${puuid}`, _methodNames2.default.SUMMONER.GET_BY_PUUID_V4, 'GET', this.limiter, null, false, 4);
    }

    /**
     * Get a summoner by summoner ID.
     *
     * Implements GET `/lol/summoner/v4/summoners/{encryptedSummonerId}`.
     *
     * @param {string} summonerID - The id of the summoner.
     */
    summonerID(summonerID) {
        return new _Request2.default(this.config, this.serviceName, `summoners/${summonerID}`, _methodNames2.default.SUMMONER.GET_BY_SUMMONER_ID_V4, 'GET', this.limiter, null, false, 4);
    }
}

exports.default = SummonerEndpointV4;