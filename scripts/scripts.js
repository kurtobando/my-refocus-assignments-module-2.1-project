import {news} from "./_news.js"

const newsContainer = document.getElementById("news-container");

news.forEach((item) => {
    console.log(item.id);
});

