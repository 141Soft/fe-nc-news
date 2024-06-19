import axios from 'axios';

const newsApi = axios.create({
    baseURL:'https://nc-news-1-5ykt.onrender.com/api'
})

export const getArticles = () => {
    return newsApi.get('/articles')
    .then(({ data }) => {
        return data.articles;
    })
}

export const getArticleByID = (id) => {
    return newsApi.get(`/articles/${id}`)
    .then(({ data }) => {
        return data.article;
    })
}

export const getCommentsByID = (id) => {
    return newsApi.get(`/articles/${id}/comments`)
    .then(({ data }) => {
        return data.comments;
    })
}