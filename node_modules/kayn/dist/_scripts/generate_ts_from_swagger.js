'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _swagger_url = require('./swagger_url');

var _swagger_url2 = _interopRequireDefault(_swagger_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sw2dts = require('sw2dts');


const TS_FILE_PATH = _path2.default.join(__dirname, '..', 'typings', 'dtos.ts');

(0, _request2.default)(_swagger_url2.default, (err, res) => {
    if (res) {
        const body = res.body.replace(new RegExp('Dto', 'g'), 'DTO', -1);
        sw2dts.convert(JSON.parse(body)).then(data => {
            _fs2.default.writeFileSync(TS_FILE_PATH, data);
            console.log('done');
        });
    }
});