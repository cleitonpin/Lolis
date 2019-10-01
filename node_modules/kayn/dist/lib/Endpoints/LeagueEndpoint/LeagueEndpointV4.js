'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _LeagueSuperclass = require('./LeagueSuperclass');

var _LeagueSuperclass2 = _interopRequireDefault(_LeagueSuperclass);

var _Request = require('../../RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _methodNames = require('../../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LeagueEndpointV4 extends _LeagueSuperclass2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.by = {
            uuid: this.uuid.bind(this)
        };

        this.limiter = limiter;
    }

    /**
     * Get league with given ID, including inactive entries.
     *
     * Implements GET `/lol/league/v4/leagues/{leagueId}`.
     *
     * @param {string} leagueUUID - The UUID of the league.
     */
    uuid(leagueUUID) {
        return new _Request2.default(this.config, this.serviceName, `leagues/${leagueUUID}`, _methodNames2.default.LEAGUE.GET_LEAGUE_BY_ID_V4, 'GET', this.limiter, null, false, 4);
    }
}

exports.default = LeagueEndpointV4;