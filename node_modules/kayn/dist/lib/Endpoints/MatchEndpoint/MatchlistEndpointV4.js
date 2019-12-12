'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MatchSuperclass = require('./MatchSuperclass');

var _MatchSuperclass2 = _interopRequireDefault(_MatchSuperclass);

var _Request = require('../../RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _methodNames = require('../../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MatchlistEndpointV4 extends _MatchSuperclass2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.by = {
            accountID: this.accountID.bind(this)
        };

        this.Recent = {
            by: {
                accountID: this.getRecentMatchlistByAccountID.bind(this)
            }
        };

        this.limiter = limiter;
    }

    /**
     * Get matchlist for games played on given account ID and platform ID and filtered using given filter parameters, if any.
     *
     * Implements GET `/lol/match/v4/matchlists/by-account/{encryptedAccountId}`.
     *
     * @param {string} accountID - The account ID of the summoner.
     */
    accountID(accountID) {
        return new _Request2.default(this.config, this.serviceName, `matchlists/by-account/${accountID}`, _methodNames2.default.MATCH.GET_MATCHLIST_V4, 'GET', this.limiter, null, false, 4);
    }

    /**
     * Get matchlist for last 20 matches played on given account ID and platform ID.
     * This is here for non-breaking purposes as there used to be a /recent endpoint.
     *
     * @param {number} accountID - The account ID of the summoner.
     */
    getRecentMatchlistByAccountID(accountID) {
        return this.accountID(accountID).query({
            beginIndex: 0,
            endIndex: 20
        });
    }
}

exports.default = MatchlistEndpointV4;