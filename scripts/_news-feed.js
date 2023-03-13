export class NewsFeed {
    constructor() {
        this._news = [];
    }

    setNewsFeed(news) {
        return (this._news = news);
    }

    getNewsFeed() {
        return this._news;
    }

    setAsReadByArticleId(id, cb = null) {
        if (!id) {
            return;
        }

        if (this._news.find((article) => article.id === id && article.is_read === true)) {
            return;
        }

        this._news = this._news.map((article) => {
            if (article.id === id) {
                article.is_read = true;
            }
            return article;
        });

        if (cb) {
            cb();
        }
    }

    setAsHeartByArticleId(id, cb = null) {
        if (!id) {
            return;
        }

        if (this._news.find((article) => article.id === id && article.is_heart === true)) {
            return;
        }

        this._news = this._news.map((article) => {
            if (article.id === id) {
                article.is_heart = true;
            }
            return article;
        });

        if (cb) {
            cb();
        }
    }
    setAsRemovedByArticleId(id, cb = null) {
        if (!id) {
            return;
        }

        if (this._news.find((article) => article.id === id && article.is_remove === true)) {
            return;
        }

        this._news = this._news.map((article) => {
            if (article.id === id) {
                article.is_remove = true;
            }
            return article;
        });

        if (cb) {
            cb();
        }
    }
}
