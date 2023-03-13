export class NewsCard {
    constructor() {
        this._article = {};
        this._onCloseEventListener = null;
        this._onHeartEventListener = null;
    }

    setArticle(article) {
        return this._article = article;
    }

    create() {
        const card = document.createElement('section');

        const image = this.createImage();
        const title = this.createTitle();
        const createdAt = this.createCreatedAt();
        const heart = this.createHeart();
        const heartCount = this.createHeartCount();
        const close = this.createClose();
        const check = this.createCheck();

        close.addEventListener('click', () => this._onCloseEventListener(this._article.id));
        heart.addEventListener('click', () => this._onHeartEventListener(this._article.id));

        card.classList.add('news-card');
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(createdAt);
        card.appendChild(heart);
        card.appendChild(heartCount);
        card.appendChild(close);
        card.appendChild(check);

        return card;
    }

    createImage() {
        const image = document.createElement('img');
        image.src = this._article.image;
        return image;
    }

    createTitle() {
        const title = document.createElement('h2');
        title.innerText = this._article.title;
        return title;
    }

    createCreatedAt() {
        const createdAt = document.createElement('span');
        createdAt.innerText = this._article.created_at;
        return createdAt;
    }

    createHeart() {
        const heart = document.createElement('img');
        heart.src = '/assets/icons/heart/heart.svg'
        return heart;
    }

    createHeartCount() {
        const heartCount = document.createElement('span');
        heartCount.innerText = this._article.hearts;
        return heartCount;
    }

    createClose() {
        const close = document.createElement('img');
        close.src = '/assets/icons/cross/cross.svg'
        return close;
    }

    createCheck() {
        const check = document.createElement('img');
        check.src = '/assets/icons/check/check.svg'
        return check;
    }

    onClose(cb) {
        if (!cb) return;
        this._onCloseEventListener = cb;
    }

    onHeart(cb) {
        if (!cb) return;
        this._onHeartEventListener = cb;
    }
}