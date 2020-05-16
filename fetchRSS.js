const https = require('https')
const parseString = require('xml2js').parseString;

module.exports = function (url, cb) { 
    https.get(url, function(res) {
        let str = '';

        if (res.statusCode !== 200) {
            console.log('error', res.headers);
        }

        res.on('data', d => str += d);

        res.on('error', (err) => console.log(err));

        res.on('end', function () {
            parseString(str, function (err, result) {
                if (err) return console.log('error', err);
                if (result===null) return console.log('error', 'result is null')
                if (cb) return cb(result)
                return result;
            });
        });
    }).end();
}