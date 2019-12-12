'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chai = require('chai');

var _Kayn = require('../../lib/Kayn');

var _defaultTtls = require('../../lib/Enums/default-ttls');

var _defaultTtls2 = _interopRequireDefault(_defaultTtls);

var _methodNames = require('../../lib/Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('Kayn', function () {
    this.timeout(0);

    describe('Caching', function () {
        it('BasicJSCache', function () {
            const kayn = (0, _Kayn.Kayn)('1234')({
                cacheOptions: {
                    cache: new _Kayn.BasicJSCache()
                }
            });
            kayn.config.cacheOptions.cache.set({ key: 'cache-test', ttl: 5 }, { foo: 'bar' });
            kayn.config.cacheOptions.cache.get({ key: 'cache-test' }, function (err, data) {
                (0, _chai.expect)(err).to.be.null;
                (0, _chai.expect)(data).to.not.be.null;
                (0, _chai.expect)(data).to.deep.equal({ foo: 'bar' });

                kayn.flushCache();
                (0, _chai.expect)(kayn.config.cacheOptions.cache.cache).to.deep.equal({});
                kayn.config.cacheOptions.cache.get({ key: 'cache-test' }, function (err, data) {
                    (0, _chai.expect)(err).to.not.be.null;
                    (0, _chai.expect)(data).to.be.null;
                });
            });
        });

        it('LRUCache', function () {
            const kayn = (0, _Kayn.Kayn)('1234')({
                cacheOptions: {
                    cache: new _Kayn.LRUCache()
                }
            });
            kayn.config.cacheOptions.cache.set({
                key: 'cache-test',
                ttl: 5
            }, { foo: 'bar' });
            kayn.config.cacheOptions.cache.get({ key: 'cache-test' }, (() => {
                var _ref = _asyncToGenerator(function* (err, data) {
                    (0, _chai.expect)(err).to.be.null;
                    (0, _chai.expect)(data).to.not.be.null;
                    (0, _chai.expect)(data).to.deep.equal({ foo: 'bar' });
                    const ok = yield kayn.flushCache();
                    (0, _chai.expect)(ok).to.equal('OK');
                });

                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            })());
        });

        it.skip('RedisCache', function (done) {
            const kayn = (0, _Kayn.Kayn)('1234')({
                cacheOptions: {
                    cache: new _Kayn.RedisCache()
                }
            });
            kayn.config.cacheOptions.cache.set({ key: 'cache-test', ttl: 5 }, { foo: 'bar' });
            kayn.config.cacheOptions.cache.get({ key: 'cache-test' }, function (err, data) {
                (0, _chai.expect)(err).to.be.null;
                (0, _chai.expect)(data).to.not.be.null;
                (0, _chai.expect)(data).to.deep.equal({ foo: 'bar' });

                kayn.flushCache(function (err, succeeded) {
                    (0, _chai.expect)(err).to.be.null;
                    (0, _chai.expect)(succeeded).to.equal('OK');
                    done();
                });
            });
        });

        describe('TTLs', function () {
            it('should set defaults', function () {
                const kayn = (0, _Kayn.Kayn)('cacher')({
                    cacheOptions: {
                        cache: new _Kayn.BasicJSCache(),
                        timeToLives: {
                            useDefault: true
                        }
                    }
                });

                (0, _chai.expect)(kayn.config.cacheOptions.ttls).to.deep.equal(_defaultTtls2.default);
            });

            it('should override defaults with specifics', function () {
                const kayn = (0, _Kayn.Kayn)('123')({
                    cacheOptions: {
                        cache: new _Kayn.BasicJSCache(),
                        timeToLives: {
                            useDefault: true,
                            byMethod: {
                                [_methodNames2.default.SUMMONER.GET_BY_ACCOUNT_ID]: 109999999990 // ms
                            }
                        }
                    }
                });

                (0, _chai.expect)(kayn.config.cacheOptions.ttls).to.deep.equal(_extends({}, _defaultTtls2.default, {
                    [_methodNames2.default.SUMMONER.GET_BY_ACCOUNT_ID]: 109999999990
                }));
            });

            it('should override defaults with groups', function () {
                const kayn = (0, _Kayn.Kayn)('123')({
                    cacheOptions: {
                        cache: new _Kayn.BasicJSCache(),
                        timeToLives: {
                            useDefault: true,
                            byGroup: {
                                STATIC: 3000
                            }
                        }
                    }
                });

                const finalObj = _extends({}, _defaultTtls2.default);
                Object.keys(_methodNames2.default.STATIC).map(key => {
                    finalObj[_methodNames2.default.STATIC[key]] = kayn.config.cacheOptions.timeToLives.byGroup.STATIC;
                });
                (0, _chai.expect)(kayn.config.cacheOptions.ttls).to.deep.equal(_extends({}, _defaultTtls2.default, finalObj));
            });

            it('should override defaults and groups with specifics', function () {
                const kayn = (0, _Kayn.Kayn)('123')({
                    cacheOptions: {
                        cache: new _Kayn.BasicJSCache(),
                        timeToLives: {
                            useDefault: true,
                            byGroup: {
                                STATIC: 3000
                            },
                            byMethod: {
                                [_methodNames2.default.STATIC.GET_CHAMPION_BY_ID]: 100,
                                [_methodNames2.default.SUMMONER.GET_BY_ACCOUNT_ID]: 100
                            }
                        }
                    }
                });
                const finalObj = _extends({}, _defaultTtls2.default);
                Object.keys(_methodNames2.default.STATIC).map(key => {
                    finalObj[_methodNames2.default.STATIC[key]] = kayn.config.cacheOptions.timeToLives.byGroup.STATIC;
                });
                (0, _chai.expect)(kayn.config.cacheOptions.ttls).to.deep.equal(_extends({}, _defaultTtls2.default, finalObj, { [_methodNames2.default.STATIC.GET_CHAMPION_BY_ID]: 100 }, { [_methodNames2.default.SUMMONER.GET_BY_ACCOUNT_ID]: 100 }));
            });

            it('should have no ttls without useDefault=true', function () {
                const kayn = (0, _Kayn.Kayn)('123')({
                    cacheOptions: {
                        cache: new _Kayn.BasicJSCache(),
                        timeToLives: {}
                    }
                });
                (0, _chai.expect)(kayn.config.cacheOptions.ttls).to.deep.equal({});
            });

            describe('backwards-compatibility and to ensure `ttls` is the source of truth', function () {
                it('should override defaults with old ttls prop', function () {
                    const kayn = (0, _Kayn.Kayn)('123')({
                        cacheOptions: {
                            cache: new _Kayn.BasicJSCache(),
                            timeToLives: { useDefault: true },
                            ttls: {
                                [_methodNames2.default.SUMMONER.GET_BY_SUMMONER_NAME]: 123456
                            }
                        }
                    });
                    (0, _chai.expect)(kayn.config.cacheOptions.ttls).to.deep.equal(_extends({}, _defaultTtls2.default, {
                        [_methodNames2.default.SUMMONER.GET_BY_SUMMONER_NAME]: 123456
                    }));
                });

                it('should override defaults and groups with old ttls prop', function () {
                    const kayn = (0, _Kayn.Kayn)('123')({
                        cacheOptions: {
                            cache: new _Kayn.BasicJSCache(),
                            timeToLives: {
                                useDefault: true,
                                byGroup: {
                                    STATIC: 9877665551
                                }
                            },
                            ttls: {
                                [_methodNames2.default.STATIC.GET_CHAMPION_BY_ID]: 123459
                            }
                        }
                    });
                    (0, _chai.expect)(kayn.config.cacheOptions.ttls[_methodNames2.default.STATIC.GET_CHAMPION_LIST]).to.equal(9877665551);
                    (0, _chai.expect)(kayn.config.cacheOptions.ttls[_methodNames2.default.STATIC.GET_CHAMPION_BY_ID]).to.equal(123459);
                });

                it('should override defaults, groups, and specifics with old ttls prop', function () {
                    const kayn = (0, _Kayn.Kayn)('123')({
                        cacheOptions: {
                            cache: new _Kayn.BasicJSCache(),
                            timeToLives: {
                                useDefault: true,
                                byGroup: {
                                    STATIC: 1238213
                                },
                                byMethod: {
                                    [_methodNames2.default.STATIC.GET_CHAMPION_BY_ID]: 9871,
                                    [_methodNames2.default.STATIC.GET_ITEM_BY_ID]: 9821372173
                                }
                            },
                            ttls: {
                                [_methodNames2.default.STATIC.GET_CHAMPION_BY_ID]: 99999999
                            }
                        }
                    });
                    (0, _chai.expect)(kayn.config.cacheOptions.ttls[_methodNames2.default.STATIC.GET_CHAMPION_BY_ID]).to.equal(99999999);
                    (0, _chai.expect)(kayn.config.cacheOptions.ttls[_methodNames2.default.STATIC.GET_ITEM_BY_ID]).to.equal(9821372173);
                });
            });
        });
    });
});