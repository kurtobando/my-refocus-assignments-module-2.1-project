import { news } from './_news.js';
import { NewsFeed } from './_news-feed.js';
import { NewsCard } from './_news-card.js';

const navDropDown = document.querySelector('.navigation-mobile-dropdown');
const navIcon = document.getElementById('navigation-icon');
const newsFeedDom = document.getElementById('news-feed');
const newsFeed = new NewsFeed();

function onRemove(id) {
    newsFeed.setAsRemovedByArticleId(id, () => onRenderNewsFeed());
}

function onHeart(id) {
    newsFeed.setAsHeartByArticleId(id, () => onRenderNewsFeed());
}

function onHover(id) {
    newsFeed.setAsReadByArticleId(id, () => onRenderNewsFeed());
}

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

navIcon.addEventListener('click', (e) => navDropDown.classList.toggle('active'));
window.addEventListener('load', () => onLoadNewsFeed());
window.addEventListener('load', () => onRenderNewsFeed());
