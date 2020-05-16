const rssFeeds = require('./rss')
const fetchRSS = require('./fetchRSS');
const adapters = require('./adapters');

/*
fetchRSS(rssFeeds.metro.url,        (data) => adapters.rssAdapter(data));
fetchRSS(rssFeeds.theSun.url,       (data) => adapters.rssAdapter(data));
fetchRSS(rssFeeds.dailyMail.url,    (data) => adapters.rssAdapter(data));
fetchRSS(rssFeeds.mirror.url,       (data) => radapters.ssAdapter(data));
fetchRSS(rssFeeds.mirror.url,       (data) => adapters.rssAdapter(data));
fetchRSS(rssFeeds.express.url,      (data) => adapters.rssAdapter(data));
fetchRSS(rssFeeds.theTelegraph.url, (data) => adapters.telegraphRSSAdapter(data));
*/