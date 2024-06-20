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

export const getArticlesByTopic = (topic) => {
    return newsApi.get(`/articles?topic=${topic}`)
    .then(({ data }) => {
        return data.articles;
    })
}

export const getTopics = () => {
    return newsApi.get('/topics')
    .then(({ data }) => {
        return data.topics;
    })
}

export const getCommentsByID = (id) => {
    return newsApi.get(`/articles/${id}/comments`)
    .then(({ data }) => {
        return data.comments;
    })
}

export const patchArticleVotesByID = (id, score) => {
    const patchBody = { inc_votes: score }
    return newsApi.patch(`/articles/${id}`, patchBody)
    .then(({ data }) => {
        return data.article.votes;
    })
}

export const postCommentByArticleID = (id, username, body) => {
    const postBody = {
        username: username,
        body: body,
    }
    return newsApi.post(`/articles/${id}/comments`, postBody)
    .then(({ data }) => {
        return data
    })
}

export const deleteCommentByID = (id) => {
    return newsApi.delete(`/comments/${id}`)
    .then(({ data }) => {
        return data
    })
}

