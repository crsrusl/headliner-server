const rssFeeds = require('./rss')
const fetchRSS = require('./fetchRSS');
const rssAdapter = require('./rssAdapter');

// fetchRSS(rssFeeds.metro.url, (data) => rssAdapter(data));
// fetchRSS(rssFeeds.theSun.url, (data) => rssAdapter(data));
// fetchRSS(rssFeeds.dailyMail.url, (data) => rssAdapter(data));
// fetchRSS(rssFeeds.mirror.url, (data) => rssAdapter(data));
// fetchRSS(rssFeeds.mirror.url, (data) => rssAdapter(data));

(async () => {
    let response = await fetchRSS(rssFeeds.metro.url, (data) => rssAdapter(data));
});