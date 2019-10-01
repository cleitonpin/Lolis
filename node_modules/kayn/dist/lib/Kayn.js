'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _riotRatelimiterTemp = require('riot-ratelimiter-temp');

var _riotRatelimiterTemp2 = _interopRequireDefault(_riotRatelimiterTemp);

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _ParameterHelper = require('./Utils/ParameterHelper');

var _ParameterHelper2 = _interopRequireDefault(_ParameterHelper);

var _ChampionRotationEndpoint = require('./Endpoints/ChampionRotationEndpoint');

var _ChampionRotationEndpoint2 = _interopRequireDefault(_ChampionRotationEndpoint);

var _DDragonChampionEndpoint = require('./Endpoints/DDragonEndpoints/DDragonChampionEndpoint');

var _DDragonChampionEndpoint2 = _interopRequireDefault(_DDragonChampionEndpoint);

var _DDragonItemEndpoint = require('./Endpoints/DDragonEndpoints/DDragonItemEndpoint');

var _DDragonItemEndpoint2 = _interopRequireDefault(_DDragonItemEndpoint);

var _DDragonLanguageEndpoint = require('./Endpoints/DDragonEndpoints/DDragonLanguageEndpoint');

var _DDragonLanguageEndpoint2 = _interopRequireDefault(_DDragonLanguageEndpoint);

var _DDragonLanguageStringEndpoint = require('./Endpoints/DDragonEndpoints/DDragonLanguageStringEndpoint');

var _DDragonLanguageStringEndpoint2 = _interopRequireDefault(_DDragonLanguageStringEndpoint);

var _DDragonMapEndpoint = require('./Endpoints/DDragonEndpoints/DDragonMapEndpoint');

var _DDragonMapEndpoint2 = _interopRequireDefault(_DDragonMapEndpoint);

var _DDragonProfileIconEndpoint = require('./Endpoints/DDragonEndpoints/DDragonProfileIconEndpoint');

var _DDragonProfileIconEndpoint2 = _interopRequireDefault(_DDragonProfileIconEndpoint);

var _DDragonRealmEndpoint = require('./Endpoints/DDragonEndpoints/DDragonRealmEndpoint');

var _DDragonRealmEndpoint2 = _interopRequireDefault(_DDragonRealmEndpoint);

var _DDragonRunesReforgedEndpoint = require('./Endpoints/DDragonEndpoints/DDragonRunesReforgedEndpoint');

var _DDragonRunesReforgedEndpoint2 = _interopRequireDefault(_DDragonRunesReforgedEndpoint);

var _DDragonSummonerSpellEndpoint = require('./Endpoints/DDragonEndpoints/DDragonSummonerSpellEndpoint');

var _DDragonSummonerSpellEndpoint2 = _interopRequireDefault(_DDragonSummonerSpellEndpoint);

var _DDragonVersionEndpoint = require('./Endpoints/DDragonEndpoints/DDragonVersionEndpoint');

var _DDragonVersionEndpoint2 = _interopRequireDefault(_DDragonVersionEndpoint);

var _StatusEndpoint = require('./Endpoints/StatusEndpoint');

var _StatusEndpoint2 = _interopRequireDefault(_StatusEndpoint);

var _ChallengerEndpointV = require('./Endpoints/LeagueEndpoint/ChallengerEndpointV4');

var _ChallengerEndpointV2 = _interopRequireDefault(_ChallengerEndpointV);

var _ChampionMasteryEndpointV = require('./Endpoints/ChampionMasteryEndpointV4');

var _ChampionMasteryEndpointV2 = _interopRequireDefault(_ChampionMasteryEndpointV);

var _CurrentGameEndpointV = require('./Endpoints/SpectatorEndpoint/CurrentGameEndpointV4');

var _CurrentGameEndpointV2 = _interopRequireDefault(_CurrentGameEndpointV);

var _FeaturedGamesEndpointV = require('./Endpoints/SpectatorEndpoint/FeaturedGamesEndpointV4');

var _FeaturedGamesEndpointV2 = _interopRequireDefault(_FeaturedGamesEndpointV);

var _GrandmasterEndpointV = require('./Endpoints/LeagueEndpoint/GrandmasterEndpointV4');

var _GrandmasterEndpointV2 = _interopRequireDefault(_GrandmasterEndpointV);

var _LeagueEndpointV = require('./Endpoints/LeagueEndpoint/LeagueEndpointV4');

var _LeagueEndpointV2 = _interopRequireDefault(_LeagueEndpointV);

var _LeagueEntriesEndpointV = require('./Endpoints/LeagueEndpoint/LeagueEntriesEndpointV4');

var _LeagueEntriesEndpointV2 = _interopRequireDefault(_LeagueEntriesEndpointV);

var _MasterEndpointV = require('./Endpoints/LeagueEndpoint/MasterEndpointV4');

var _MasterEndpointV2 = _interopRequireDefault(_MasterEndpointV);

var _MatchEndpointV = require('./Endpoints/MatchEndpoint/MatchEndpointV4');

var _MatchEndpointV2 = _interopRequireDefault(_MatchEndpointV);

var _MatchlistEndpointV = require('./Endpoints/MatchEndpoint/MatchlistEndpointV4');

var _MatchlistEndpointV2 = _interopRequireDefault(_MatchlistEndpointV);

var _SummonerEndpointV = require('./Endpoints/SummonerEndpointV4');

var _SummonerEndpointV2 = _interopRequireDefault(_SummonerEndpointV);

var _ThirdPartyCodeEndpointV = require('./Endpoints/ThirdPartyCodeEndpointV4');

var _ThirdPartyCodeEndpointV2 = _interopRequireDefault(_ThirdPartyCodeEndpointV);

var _TournamentEndpointV = require('./Endpoints/TournamentEndpointV4');

var _TournamentEndpointV2 = _interopRequireDefault(_TournamentEndpointV);

var _TournamentStubEndpointV = require('./Endpoints/TournamentStubEndpointV4');

var _TournamentStubEndpointV2 = _interopRequireDefault(_TournamentStubEndpointV);

var _defaultTtls = require('./Enums/default-ttls');

var _defaultTtls2 = _interopRequireDefault(_defaultTtls);

var _KaynConfig = require('./KaynConfig');

var _regions = require('./Enums/regions');

var _regions2 = _interopRequireDefault(_regions);

var _methodNames = require('./Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

var _BasicJSCache = require('./Caches/BasicJSCache');

var _BasicJSCache2 = _interopRequireDefault(_BasicJSCache);

var _LRUCache = require('./Caches/LRUCache');

var _LRUCache2 = _interopRequireDefault(_LRUCache);

var _RedisCache = require('./Caches/RedisCache');

var _RedisCache2 = _interopRequireDefault(_RedisCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const RRLStrategies = require('riot-ratelimiter-temp/dist/RateLimiter').STRATEGY;

class Kayn {
    constructor(key = process.env.RIOT_LOL_API_KEY, config = _KaynConfig.DEFAULT_KAYN_CONFIG) {
        if (!_ParameterHelper2.default.isKeyValid(key)) {
            throw new Error('Failed to initialize Kayn! API key is not a non-empty string.');
        }

        // Make sure that the rest of the sane, nested defaults are set.
        // The source object here is the user config,
        // while the destination is the default config.
        // Extra merge is used to prevent mutation of original default config.
        // Merge is needed for deep-merging.
        this.config = (0, _KaynConfig.KAYN_CONFIG_STRUCT)((0, _lodash2.default)((0, _lodash2.default)({}, _KaynConfig.DEFAULT_KAYN_CONFIG), _extends({ key }, config)));

        const strategy = this.config.requestOptions.burst ? RRLStrategies.BURST : RRLStrategies.SPREAD;

        this.limiter = new _riotRatelimiterTemp2.default({
            strategy
        });

        if (this.config.debugOptions.isEnabled) {
            // Not pure but whatever.
            const configCopy = _extends({}, this.config);
            if (!configCopy.debugOptions.showKey) {
                delete configCopy.key;
            }
            (0, _Logger2.default)(this.config);
            this.config.debugOptions.loggers.initLogger('with config:\n%O', configCopy);
        }

        // Handle caching time-to-lives.
        if (this.config.cacheOptions.cache) {
            /*
                Start by checking if default is used. If so, set it.
                Next, merge grouped ttls and then singular ttls.
                Finally, merge final, old `ttls` prop for backwards-compatibility.
                We use this as the source of truth for cache ttls.
            */
            let finalTTLs = {};
            if (this.config.cacheOptions.timeToLives.useDefault) {
                finalTTLs = (0, _lodash2.default)(finalTTLs, _defaultTtls2.default);
            }
            finalTTLs = (0, _lodash2.default)(finalTTLs, (0, _defaultTtls.makeTTLsFromGroupedTTLs)(this.config.cacheOptions.timeToLives.byGroup), this.config.cacheOptions.timeToLives.byMethod, this.config.cacheOptions.ttls);
            this.config.cacheOptions.ttls = finalTTLs;
        }

        // Set up interfaces.
        // Did not mean to have this as ChampionRotation, but I'll keep it just in case people are using it.
        // Use Champion.Rotation.list instead.
        this.ChampionRotation = new _ChampionRotationEndpoint2.default(this.config, this.limiter);
        this.Champion = {};
        this.Champion.Rotation = this.ChampionRotation;
        this.DDragon = {
            Champion: new _DDragonChampionEndpoint2.default(this.config),
            Item: new _DDragonItemEndpoint2.default(this.config),
            Language: new _DDragonLanguageEndpoint2.default(this.config),
            LanguageString: new _DDragonLanguageStringEndpoint2.default(this.config),
            Map: new _DDragonMapEndpoint2.default(this.config),
            ProfileIcon: new _DDragonProfileIconEndpoint2.default(this.config),
            Realm: new _DDragonRealmEndpoint2.default(this.config),
            RunesReforged: new _DDragonRunesReforgedEndpoint2.default(this.config),
            SummonerSpell: new _DDragonSummonerSpellEndpoint2.default(this.config),
            Version: new _DDragonVersionEndpoint2.default(this.config)
        };
        this.Status = new _StatusEndpoint2.default(this.config, this.limiter);

        this.ChallengerV4 = new _ChallengerEndpointV2.default(this.config, this.limiter);
        this.Challenger = this.ChallengerV4;
        this.ChampionMasteryV4 = new _ChampionMasteryEndpointV2.default(this.config, this.limiter);
        this.ChampionMastery = this.ChampionMasteryV4;
        this.CurrentGameV4 = new _CurrentGameEndpointV2.default(this.config, this.limiter);
        this.CurrentGame = this.CurrentGameV4;
        this.FeaturedGamesV4 = new _FeaturedGamesEndpointV2.default(this.config, this.limiter);
        this.FeaturedGames = this.FeaturedGamesV4;
        this.GrandmasterV4 = new _GrandmasterEndpointV2.default(this.config, this.limiter);
        this.Grandmaster = this.GrandmasterV4;
        this.LeagueV4 = new _LeagueEndpointV2.default(this.config, this.limiter);
        this.League = this.LeagueV4;
        this.League.Entries = new _LeagueEntriesEndpointV2.default(this.config, this.limiter);
        this.MasterV4 = new _MasterEndpointV2.default(this.config, this.limiter);
        this.Master = this.MasterV4;
        this.MatchV4 = new _MatchEndpointV2.default(this.config, this.limiter);
        this.Match = this.MatchV4;
        this.MatchlistV4 = new _MatchlistEndpointV2.default(this.config, this.limiter);
        this.Matchlist = this.MatchlistV4;
        this.SummonerV4 = new _SummonerEndpointV2.default(this.config, this.limiter);
        this.Summoner = this.SummonerV4;
        this.ThirdPartyCodeV4 = new _ThirdPartyCodeEndpointV2.default(this.config, this.limiter);
        this.ThirdPartyCode = this.ThirdPartyCodeV4;
        this.TournamentV4 = new _TournamentEndpointV2.default(this.config, this.limiter);
        this.Tournament = this.TournamentV4;
        this.TournamentStubV4 = new _TournamentStubEndpointV2.default(this.config, this.limiter);
        this.TournamentStub = this.TournamentStubV4;

        if (this.config.debugOptions.isEnabled) {
            this.config.debugOptions.loggers.initLogger('Initialized interfaces. Ready!');
        }
    }

    flushCache(cb) {
        return new Promise((resolve, reject) => {
            if (!cb) {
                cb = (err, data) => err ? reject(err) : resolve(data);
            }
            this.config.cacheOptions.cache.flushCache(cb);
        });
    }
}

const init = key => config => new Kayn(key, config);

module.exports = {
    Kayn: init,
    REGIONS: _regions2.default,
    METHOD_NAMES: _methodNames2.default,
    BasicJSCache: _BasicJSCache2.default,
    LRUCache: _LRUCache2.default,
    RedisCache: _RedisCache2.default
};