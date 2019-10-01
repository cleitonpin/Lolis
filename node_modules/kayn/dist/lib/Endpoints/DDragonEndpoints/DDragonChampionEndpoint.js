'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _DDragonRequest = require('../../RequestClient/DDragonRequest');

var _DDragonRequest2 = _interopRequireDefault(_DDragonRequest);

var _methodNames = require('../../Enums/method-names');

var _methodNames2 = _interopRequireDefault(_methodNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

class DDragonChampionEndpoint {
    constructor(config) {
        this.config = config;

        this.get = this.get.bind(this);
        this.list = this.list.bind(this);
        this.listFull = this.listFull.bind(this);

        // Helpers
        this.getDataById = this.getDataById.bind(this);
        this.getDataByIdWithParentAsId = this.getDataByIdWithParentAsId.bind(this);
        this.listDataById = this.listDataById.bind(this);
        this.listDataByIdWithParentAsId = this.listDataByIdWithParentAsId.bind(this);
        this.listFullDataById = this.listFullDataById.bind(this);
        this.listFullDataByIdWithParentAsId = this.listFullDataByIdWithParentAsId.bind(this);
    }

    get(championName) {
        return new _DDragonRequest2.default(this.config, `champion/${championName}.json`, _DDragonRequest.DDragonRequestTypes.CDN.DATA, _methodNames2.default.DDRAGON.CHAMPION_GET);
    }

    list() {
        return new _DDragonRequest2.default(this.config, 'champion.json', _DDragonRequest.DDragonRequestTypes.CDN.DATA, _methodNames2.default.DDRAGON.CHAMPION_LIST);
    }

    // Own method to make it explicit that they are cached differently.
    listFull() {
        return new _DDragonRequest2.default(this.config, 'championFull.json', _DDragonRequest.DDragonRequestTypes.CDN.DATA, _methodNames2.default.DDRAGON.CHAMPION_LIST_FULL);
    }

    getDataById(championName) {
        return new _DDragonRequest2.default(this.config, `champion/${championName}.json`, _DDragonRequest.DDragonRequestTypes.CDN.DATA, _methodNames2.default.DDRAGON.CHAMPION_GET_DATA_BY_ID, (_ref) => {
            let { data } = _ref,
                rest = _objectWithoutProperties(_ref, ['data']);

            return _extends({}, rest, {
                data: transform(ID_WITH_KEY, data)
            });
        });
    }

    getDataByIdWithParentAsId(championName) {
        return new _DDragonRequest2.default(this.config, `champion/${championName}.json`, _DDragonRequest.DDragonRequestTypes.CDN.DATA, _methodNames2.default.DDRAGON.CHAMPION_GET_DATA_BY_ID_PARENT_TOO, (_ref2) => {
            let { data } = _ref2,
                rest = _objectWithoutProperties(_ref2, ['data']);

            return _extends({}, rest, {
                data: transform(ID_WITH_KEY_AND_PARENT_AS_ID, data)
            });
        });
    }

    listDataById() {
        return new _DDragonRequest2.default(this.config, 'champion.json', _DDragonRequest.DDragonRequestTypes.CDN.DATA, _methodNames2.default.DDRAGON.CHAMPION_LIST_DATA_BY_ID, (_ref3) => {
            let { data } = _ref3,
                rest = _objectWithoutProperties(_ref3, ['data']);

            return _extends({}, rest, {
                data: Object.keys(data).map(d => transform(ID_WITH_KEY, { [d]: data[d] })).reduce((t, c) => _extends({}, t, c), {})
            });
        });
    }

    listDataByIdWithParentAsId() {
        return new _DDragonRequest2.default(this.config, 'champion.json', _DDragonRequest.DDragonRequestTypes.CDN.DATA, _methodNames2.default.DDRAGON.CHAMPION_LIST_DATA_BY_ID_PARENT_TOO, (_ref4) => {
            let { data } = _ref4,
                rest = _objectWithoutProperties(_ref4, ['data']);

            return _extends({}, rest, {
                data: Object.keys(data).map(d => transform(ID_WITH_KEY_AND_PARENT_AS_ID, {
                    [d]: data[d]
                })).reduce((t, c) => _extends({}, t, c), {})
            });
        });
    }

    listFullDataById() {
        return new _DDragonRequest2.default(this.config, `championFull.json`, _DDragonRequest.DDragonRequestTypes.CDN.DATA, _methodNames2.default.DDRAGON.CHAMPION_LIST_FULL_DATA_BY_ID, (_ref5) => {
            let { data } = _ref5,
                rest = _objectWithoutProperties(_ref5, ['data']);

            return _extends({}, rest, {
                data: Object.keys(data).map(d => transform(ID_WITH_KEY, { [d]: data[d] })).reduce((t, c) => _extends({}, t, c), {})
            });
        });
    }

    listFullDataByIdWithParentAsId() {
        return new _DDragonRequest2.default(this.config, `championFull.json`, _DDragonRequest.DDragonRequestTypes.CDN.DATA, _methodNames2.default.DDRAGON.CHAMPION_LIST_FULL_DATA_BY_ID, (_ref6) => {
            let { data } = _ref6,
                rest = _objectWithoutProperties(_ref6, ['data']);

            return _extends({}, rest, {
                data: Object.keys(data).map(d => transform(ID_WITH_KEY_AND_PARENT_AS_ID, {
                    [d]: data[d]
                })).reduce((t, c) => _extends({}, t, c), {})
            });
        });
    }
}

const swapIdAndKey = data => _extends({}, data, { id: data.key, key: data.id });
const makeParentId = data => ({
    [data.key]: _extends({}, data, { id: data.key, key: data.id })
});

const ID_WITH_KEY = 'id_with_key';
const ID_WITH_KEY_AND_PARENT_AS_ID = 'id_with_key_and_parent_as_id';

const transform = (type, data) => {
    const nameKey = Object.keys(data)[0];
    // Only get the first key (which is the name).
    const object = data[nameKey];
    const fn = {
        [ID_WITH_KEY]: {
            [nameKey]: swapIdAndKey(object)
        },
        [ID_WITH_KEY_AND_PARENT_AS_ID]: makeParentId(object)
    }[type];
    return fn;
};

exports.default = DDragonChampionEndpoint;