const rssFeeds = require('./rss')
const fetchRSS = require('./fetchRSS');
const metroAdapter = require('./adapters/metroAdapter');
const theSunAdapter = require('./adapters/theSunAdapter');
const dailyMailAdapter = require('./adapters/dailyMailAdapter');
const standardAdapter = require('./adapters/standardAdapter');
const mirrorAdapter = require('./adapters/mirrorAdapter');


//fetchRSS(rssFeeds.metro.url, (data) => metroAdapter(data));
//fetchRSS(rssFeeds.theSun.url, (data) => theSunAdapter(data));
// fetchRSS(rssFeeds.dailyMail.url, (data) => dailyMailAdapter(data));
fetchRSS(rssFeeds.mirror.url, (data) => mirrorAdapter(data));