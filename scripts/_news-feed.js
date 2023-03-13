export class NewsFeed {
    constructor() {
        this._news = [];
    }

    setNewsFeed(news) {
        return this._news = news;
    }

    getNewsFeed() {
        return this._news;
    }
}

