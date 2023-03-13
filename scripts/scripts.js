import { news } from './_news.js';
import { NewsFeed } from './_news-feed.js';
import { NewsCard } from './_news-card.js';

const newsFeedDom = document.getElementById('news-feed');
const newsFeed = new NewsFeed();

function onLoadNewsFeed() {
    newsFeed.setNewsFeed(news);
}

function onRenderNewsFeed() {
    newsFeedDom.innerHTML = '';
    newsFeed
        .getNewsFeed()
        .sort((a, b) => b.id - a.id)
        .filter((article) => !article.is_remove)
        .map((article) => {
            const newsCard = new NewsCard();

            newsCard.setArticle(article);
            newsCard.onRemove(onRemove);
            newsCard.onHeart(onHeart);
            newsCard.onHover(onHover);
            newsFeedDom.appendChild(newsCard.create());
        });
}

function onRemove(id) {
    newsFeed.setAsRemovedByArticleId(id, () => onRenderNewsFeed());
}

function onHeart(id) {
    newsFeed.setAsHeartByArticleId(id, () => onRenderNewsFeed());
}

function onHover(id) {
    newsFeed.setAsReadByArticleId(id, () => onRenderNewsFeed());
}

window.addEventListener('load', () => {
    onLoadNewsFeed();
    onRenderNewsFeed();
});
