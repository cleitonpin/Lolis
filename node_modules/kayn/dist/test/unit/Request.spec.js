'use strict';

var _chai = require('chai');

var _Request = require('../../lib/RequestClient/Request');

var _Request2 = _interopRequireDefault(_Request);

var _TestUtils = require('../TestUtils');

var _TestUtils2 = _interopRequireDefault(_TestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { defaultConfig } = _TestUtils2.default;

describe('Request', function () {
    it('should initialize correctly #1', function () {
        const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc');
        const { config, methodName, payload } = request;
        (0, _chai.expect)(config).to.deep.equal(defaultConfig);
        (0, _chai.expect)(methodName).to.deep.equal('abc');
        (0, _chai.expect)(payload).to.deep.equal({
            method: 'GET',
            serviceName: 'summoner',
            endpoint: 'by-name/chaullenger',
            query: [],
            region: '',
            isTournament: false,
            version: 3,
            apiURLPrefix: 'https://%s.api.riotgames.com'
        });
    });

    it('should initialize correctly #2', function () {
        const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc', 'POST', null, { hello: 'world' }, true, 3);
        const { config, methodName, payload } = request;
        (0, _chai.expect)(config).to.deep.equal(defaultConfig);
        (0, _chai.expect)(methodName).to.deep.equal('abc');
        (0, _chai.expect)(payload).to.deep.equal({
            method: 'POST',
            serviceName: 'summoner',
            endpoint: 'by-name/chaullenger',
            query: [],
            region: '',
            body: { hello: 'world' },
            isTournament: true,
            version: 3,
            apiURLPrefix: 'https://%s.api.riotgames.com'
        });
    });

    it('should initialize correctly #3', function () {
        const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc', 'PUT', null, { hello: 'world' }, true, 3);
        const { config, methodName, payload } = request;
        (0, _chai.expect)(config).to.deep.equal(defaultConfig);
        (0, _chai.expect)(methodName).to.deep.equal('abc');
        (0, _chai.expect)(payload).to.deep.equal({
            method: 'PUT',
            serviceName: 'summoner',
            endpoint: 'by-name/chaullenger',
            query: [],
            region: '',
            body: { hello: 'world' },
            isTournament: true,
            version: 3,
            apiURLPrefix: 'https://%s.api.riotgames.com'
        });
    });

    it('should initialize correctly #4', function () {
        const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc', 'PUT', null, { hello: 'world' }, true, 3, 'http://localhost');
        const { config, methodName, payload } = request;
        (0, _chai.expect)(config).to.deep.equal(defaultConfig);
        (0, _chai.expect)(methodName).to.deep.equal('abc');
        (0, _chai.expect)(payload).to.deep.equal({
            method: 'PUT',
            serviceName: 'summoner',
            endpoint: 'by-name/chaullenger',
            query: [],
            region: '',
            body: { hello: 'world' },
            isTournament: true,
            version: 3,
            apiURLPrefix: 'http://localhost'
        });
    });

    it('should add query parameters correctly', function () {
        const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc');
        request.query({ key: 'value' });
        (0, _chai.expect)(request.payload.query).to.deep.equal([{ key: 'value' }]);

        // Ensure that query is appended, and does not
        // overwrite old query.
        request.query({ key2: 'value2' });
        (0, _chai.expect)(request.payload.query).to.deep.equal([{ key: 'value' }, { key2: 'value2' }]);
    });

    it('should throw if query is passed non-object', function () {
        const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc');
        (0, _chai.expect)(() => request.query('notLikeThis')).to.throw();
        (0, _chai.expect)(() => request.query(3)).to.throw();
        (0, _chai.expect)(() => request.query(() => 'abc')).to.throw();
    });

    it('should set region correctly', function () {
        const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc');
        request.region('na');
        (0, _chai.expect)(request.payload.region).to.equal('na');
    });

    it('should throw if region is set twice', function () {
        const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc');
        request.region('na');
        (0, _chai.expect)(request.payload.region).to.equal('na');
        (0, _chai.expect)(() => request.region('kr')).to.throw();
    });

    it('should throw on bad region', function () {
        const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc');
        (0, _chai.expect)(() => request.region('abcdefgjijklmnopqrstuvwxyz')).to.throw();
    });

    describe('regionNoThrow', function () {
        it('should not throw on bad region', function () {
            const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc');
            (0, _chai.expect)(() => request.regionNoThrow(null)).to.not.throw();
            (0, _chai.expect)(() => request.regionNoThrow({ hello: 'world' })).to.not.throw();
        });

        it('should fallback to default region', function () {
            const request = new _Request2.default(defaultConfig, 'summoner', 'by-name/chaullenger', 'abc');
            (0, _chai.expect)(request.regionNoThrow(null).config.region).to.equal('na');
            (0, _chai.expect)(request.regionNoThrow({ hello: 'world' }).config.region).to.equal('na');
        });
    });
});