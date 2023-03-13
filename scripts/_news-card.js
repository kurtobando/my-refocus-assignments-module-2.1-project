export class NewsCard {
    constructor() {
        this._article = {};
        this._onHoverEventListener = null;
        this._onCloseEventListener = null;
        this._onHeartEventListener = null;
    }

    setArticle(article) {
        return (this._article = article);
    }

    create() {
        const card = document.createElement('section');
        const image = this.createImage();
        const title = this.createTitle();
        const createdAt = this.createCreatedAt();
        const heart = this.createHeart();
        const heartActive = this.createHeartActive();
        const heartCount = this.createHeartCount();
        const close = this.createClose();
        const check = this.createCheck();
        const content = this.createContent();
        const meta = this.createMeta();

        card.addEventListener('mouseenter', () => this._onHoverEventListener(this._article.id), { once: true });
        close.addEventListener('click', () => this._onCloseEventListener(this._article.id));
        heart.addEventListener('click', () => this._onHeartEventListener(this._article.id));

        meta.appendChild(createdAt);
        this._article.is_heart ? meta.appendChild(heartActive) : meta.appendChild(heart);
        meta.appendChild(heartCount);

        this._article.is_read ? content.appendChild(check) : null;
        content.appendChild(title);
        content.appendChild(meta);

        card.classList.add('news-card');
        card.appendChild(image);
        card.appendChild(content);
        card.appendChild(close);

        return card;
    }

    createImage() {
        const imageGradient = document.createElement('div');
        const image = document.createElement('img');
        image.src = this._article.image;
        image.classList.add('news-card-image');
        imageGradient.classList.add('news-card-image-gradient');
        imageGradient.appendChild(image);
        return imageGradient;
    }

    createTitle() {
        const title = document.createElement('h2');
        title.innerText = this._article.title;
        title.classList.add('news-card-title');
        return title;
    }

    createCreatedAt() {
        const createdAt = document.createElement('span');
        createdAt.innerText = this._article.created_at;
        createdAt.classList.add('news-card-created-at');
        return createdAt;
    }

    createHeart() {
        const heart = document.createElement('span');
        heart.classList.add('news-card-heart');
        return heart;
    }

    createHeartActive() {
        const heartActive = document.createElement('span');
        heartActive.classList.add('news-card-heart-active');
        return heartActive;
    }

    createHeartCount() {
        const heartCount = document.createElement('span');
        heartCount.innerText = this._article.hearts;
        heartCount.classList.add('news-card-heart-count');
        return heartCount;
    }

    createContent() {
        const content = document.createElement('div');
        content.classList.add('news-card-content');
        return content;
    }

    createMeta() {
        const meta = document.createElement('div');
        meta.classList.add('news-card-meta');
        return meta;
    }

    createClose() {
        const close = document.createElement('span');
        close.classList.add('news-card-close');
        return close;
    }

    createCheck() {
        const check = document.createElement('img');
        check.src = '/assets/icons/check/check.svg';
        check.classList.add('news-card-check');
        return check;
    }

    onRemove(cb) {
        if (!cb) return;
        this._onCloseEventListener = cb;
    }

    onHeart(cb) {
        if (!cb) return;
        this._onHeartEventListener = cb;
    }

    onHover(cb) {
        if (!cb) return;
        this._onHoverEventListener = cb;
    }
}
