import { news } from './_news.js';
import { NewsFeed } from './_news-feed.js';
import { NewsCard } from './_news-card.js';

const newsFeedDom = document.getElementById('news-feed');
const newsFeed = new NewsFeed();

newsFeed.setNewsFeed(news);
newsFeed
    .getNewsFeed()
    .sort((a, b) => b.id - a.id)
    .map((article) => {
        const newsCard = new NewsCard();

        newsCard.setArticle(article);
        newsCard.onClose(onClose);
        newsCard.onHeart(onHeart);
        newsFeedDom.appendChild(newsCard.create());
    });

function onClose(id) {
    console.log('close');
    console.log(id);
}

function onHeart(id) {
    console.log('heart');
    console.log(id);
}
