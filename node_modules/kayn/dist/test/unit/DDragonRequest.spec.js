'use strict';

var _chai = require('chai');

var _DDragonRequest = require('../../lib/RequestClient/DDragonRequest');

var _DDragonRequest2 = _interopRequireDefault(_DDragonRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DDragonRequest', function () {
    describe('ddragonRequestTypeToUrl', function () {
        it('should create correct `version` url', function () {
            const urlInformation = {
                endpoint: 'na.json'
            };
            const url = (0, _DDragonRequest.ddragonRequestTypeToUrl)(_DDragonRequest.DDragonRequestTypes.REALMS, urlInformation);
            (0, _chai.expect)(url).to.equal('https://ddragon.leagueoflegends.com/realms/na.json');
        });

        it('should create correct `data` url', function () {
            const urlInformation = {
                endpoint: 'champion.json',
                version: '8.5.1',
                locale: 'en_US'
            };
            const url = (0, _DDragonRequest.ddragonRequestTypeToUrl)(_DDragonRequest.DDragonRequestTypes.CDN.DATA, urlInformation);
            (0, _chai.expect)(url).to.equal('https://ddragon.leagueoflegends.com/cdn/8.5.1/data/en_US/champion.json');
        });

        it('should throw an error if `data` url does not have a version', function () {
            const urlInformation = {
                endpoint: 'champion.json',
                locale: 'en_US'
            };
            (0, _chai.expect)(() => (0, _DDragonRequest.ddragonRequestTypeToUrl)(_DDragonRequest.DDragonRequestTypes.CDN.DATA, urlInformation)).to.throw();
        });

        it('should create correct `img` url #1', function () {
            const urlInformation = {
                endpoint: 'profileicon/588.png',
                version: '6.24.1'
            };
            const url = (0, _DDragonRequest.ddragonRequestTypeToUrl)(_DDragonRequest.DDragonRequestTypes.CDN.IMAGE.WITH_VERSION, urlInformation);
            (0, _chai.expect)(url).to.equal('https://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/588.png');
        });

        it('should create correct `img` url #2', function () {
            const urlInformation = {
                endpoint: 'passive/Cryophoenix_Rebirth.png',
                version: '6.24.1'
            };
            const url = (0, _DDragonRequest.ddragonRequestTypeToUrl)(_DDragonRequest.DDragonRequestTypes.CDN.IMAGE.WITH_VERSION, urlInformation);
            (0, _chai.expect)(url).to.equal('https://ddragon.leagueoflegends.com/cdn/6.24.1/img/passive/Cryophoenix_Rebirth.png');
        });

        it('should create correct `img` url #3', function () {
            const urlInformation = {
                endpoint: 'champion/splash/Aatrox_0.jpg'
            };
            const url = (0, _DDragonRequest.ddragonRequestTypeToUrl)(_DDragonRequest.DDragonRequestTypes.CDN.IMAGE.STATIC, urlInformation);
            (0, _chai.expect)(url).to.equal('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg');
        });

        it('should create correct `img` url #4', function () {
            const urlInformation = {
                endpoint: 'champion/loading/Aatrox_0.jpg'
            };
            const url = (0, _DDragonRequest.ddragonRequestTypeToUrl)(_DDragonRequest.DDragonRequestTypes.CDN.IMAGE.STATIC, urlInformation);
            (0, _chai.expect)(url).to.equal('https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg');
        });
    });

    it('should initialize correctly #1', function () {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //)
        //const { config, methodName, payload } = request
        //expect(config).to.deep.equal(defaultConfig)
        //expect(methodName).to.deep.equal('abc')
        //expect(payload).to.deep.equal({
        //    method: 'GET',
        //    serviceName: 'summoner',
        //    endpoint: 'by-name/chaullenger',
        //    query: [],
        //    region: '',
        //    isTournament: false,
        //})
    });

    it('should initialize correctly #2', function () {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //    'POST',
        //    null,
        //    { hello: 'world' },
        //    true,
        //)
        //const { config, methodName, payload } = request
        //expect(config).to.deep.equal(defaultConfig)
        //expect(methodName).to.deep.equal('abc')
        //expect(payload).to.deep.equal({
        //    method: 'POST',
        //    serviceName: 'summoner',
        //    endpoint: 'by-name/chaullenger',
        //    query: [],
        //    region: '',
        //    body: { hello: 'world' },
        //    isTournament: true,
        //})
    });

    it('should initialize correctly #3', function () {
        //const request = new Request(
        //    defaultConfig,
        //    'summoner',
        //    'by-name/chaullenger',
        //    'abc',
        //    'PUT',
        //    null,
        //    { hello: 'world' },
        //    true,
        //)
        //const { config, methodName, payload } = request
        //expect(config).to.deep.equal(defaultConfig)
        //expect(methodName).to.deep.equal('abc')
        //expect(payload).to.deep.equal({
        //    method: 'PUT',
        //    serviceName: 'summoner',
        //    endpoint: 'by-name/chaullenger',
        //    query: [],
        //    region: '',
        //    body: { hello: 'world' },
        //    isTournament: true,
        //})
    });
});