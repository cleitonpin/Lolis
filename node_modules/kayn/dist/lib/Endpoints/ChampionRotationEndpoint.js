'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PlatformSuperclass = require('./PlatformSuperclass');

var _PlatformSuperclass2 = _interopRequireDefault(_PlatformSuperclass);

var _Request = require('../RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _methodNames = require('../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChampionRotationEndpoint extends _PlatformSuperclass2.default {
    constructor(config, limiter) {
        super();

        this.config = config;

        this.list = this.list.bind(this);

        this.serviceName = 'platform';

        this.limiter = limiter;
    }

    /**
     * Returns champion rotations, including free-to-play and low-level free-to-play rotations.
     *
     * Implements GET `/lol/platform/v3/champion-rotations`.
     */
    list() {
        return new _Request2.default(this.config, this.serviceName, `champion-rotations`, _methodNames2.default.CHAMPION.GET_CHAMPION_ROTATIONS, 'GET', this.limiter);
    }
}

exports.default = ChampionRotationEndpoint;