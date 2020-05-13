module.exports = function (result) {
    result.rss.channel[0].item.forEach(element => {
        console.log({
            title: element.title[0],
            source: element.link[0],
            publicationDate: element.pubDate[0],
            description: element.description[0]
        });
    });
}