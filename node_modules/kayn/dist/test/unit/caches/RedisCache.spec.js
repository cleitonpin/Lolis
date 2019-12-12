'use strict';

var _chai = require('chai');

var _RedisCache = require('../../../lib/Caches/RedisCache');

var _RedisCache2 = _interopRequireDefault(_RedisCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LOCALHOST_ADDR = '127.0.0.1';

describe('RedisCache', function () {
    this.timeout(0);

    it('should initialize with default options', function () {
        const redis = new _RedisCache2.default();
        (0, _chai.expect)(redis.client.connection_options.host).to.equal(LOCALHOST_ADDR);
        (0, _chai.expect)(redis.client.connection_options.port).to.equal(6379);
        (0, _chai.expect)(redis.prefix).to.equal('kayn-');
    });

    it('should initialize with configured options 1', function () {
        const options = {
            host: '192.168.0.1',
            port: 5000,
            keyPrefix: 'testPrefix-'
        };
        const redis = new _RedisCache2.default(options);
        (0, _chai.expect)(redis.client.connection_options.host).to.equal(options.host);
        (0, _chai.expect)(redis.client.connection_options.port).to.equal(options.port);
        (0, _chai.expect)(redis.prefix).to.equal(options.keyPrefix);
    });

    it('should initialize with configured options 2', function () {
        const options = {
            host: '192.168.0.1',
            port: 5000,
            keyPrefix: 'testPrefix-',
            password: 'abcdefghijklmnopqrstuvwxyz'
        };
        const redis = new _RedisCache2.default(options);
        (0, _chai.expect)(redis.client.connection_options.host).to.equal(options.host);
        (0, _chai.expect)(redis.client.connection_options.port).to.equal(options.port);
        (0, _chai.expect)(redis.client.options.password).to.equal(options.password);
    });

    it('set & get should work', function () {
        const redis = new _RedisCache2.default();
        const key = 'kayn-key-etc';
        const ttl = 3000;
        const data = { cached: 'value' };
        redis.set({
            key,
            ttl
        }, data);
        redis.get({ key }, (err, cached) => {
            (0, _chai.expect)(err).to.be.null;
            (0, _chai.expect)(cached).to.not.be.null;
            (0, _chai.expect)(cached).to.deep.equal(data);
        });
    });

    it('get should fail if data does not exist', function () {
        const redis = new _RedisCache2.default();
        const key = 'hey-guys';
        redis.get({ key }, (err, cached) => {
            (0, _chai.expect)(err).to.not.be.null;
            (0, _chai.expect)(cached).to.be.null;
        });
    });

    it('set & get should fail after expired timer', function () {
        const redis = new _RedisCache2.default();
        const key = 'kayn-key-etc';
        const ttl = 100;
        const data = { cached: 'value' };
        redis.set({
            key,
            ttl
        }, data);
        setTimeout(() => {
            redis.get({ key }, (err, cached) => {
                (0, _chai.expect)(err).to.not.be.null;
                (0, _chai.expect)(cached).to.be.null;
            });
        }, 1000);
    });

    it('flushCache() should reset cache', function (done) {
        const redis = new _RedisCache2.default();
        const key = 'kayn-key-etc';
        const ttl = 3000;
        const data = { cached: 'value' };
        redis.set({ key, ttl }, data);
        redis.get({ key }, (err, cached) => {
            (0, _chai.expect)(err).to.be.null;
            (0, _chai.expect)(cached).to.not.be.null;
            redis.flushCache(function (err, succeeded) {
                (0, _chai.expect)(err).to.be.null;
                (0, _chai.expect)(succeeded).to.equal('OK');
                done();
            });
        });
    });
});