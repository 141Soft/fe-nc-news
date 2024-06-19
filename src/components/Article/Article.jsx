function Article({article}) {
    return (
        <li className="article">
            <h3 className="article">{article.title}</h3>
            <h4><span className="topicLine">{article.topic}</span> <span className ="byline">{article.author}</span></h4>
            <p className = "articleBody">{article.body}</p>
            <a className ="article" href="">Read more...</a>
            <br></br>
            <p className="timestamp">{article.created_at.slice(0,10)}</p>
            <p>Score:{article.votes} Replies:{article.comment_count}</p>
        </li>
    )
}

export default Article;