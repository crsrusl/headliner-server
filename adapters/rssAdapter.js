module.exports = function (result) {
    let results = [];

    result.rss.channel[0].item.forEach(element => {
        results.push({
            title: element.title[0],
            source: element.link[0],
            publicationDate: element.pubDate[0],
            description: element.description[0]
        });
    });

    return results;
}