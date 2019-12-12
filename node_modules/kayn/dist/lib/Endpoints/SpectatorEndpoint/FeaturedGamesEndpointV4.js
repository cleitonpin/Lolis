'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SpectatorSuperclass = require('./SpectatorSuperclass');

var _SpectatorSuperclass2 = _interopRequireDefault(_SpectatorSuperclass);

var _Request = require('../../RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _methodNames = require('../../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FeaturedGamesEndpointV4 extends _SpectatorSuperclass2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.list = this.list.bind(this);

        this.limiter = limiter;
    }

    /**
     * Get list of featured games.
     *
     * Implements GET `/lol/spectator/v4/featured-games`.
     */
    list() {
        return new _Request2.default(this.config, this.serviceName, 'featured-games', _methodNames2.default.SPECTATOR.GET_FEATURED_GAMES_V4, 'GET', this.limiter, null, false, 4);
    }
}

exports.default = FeaturedGamesEndpointV4;