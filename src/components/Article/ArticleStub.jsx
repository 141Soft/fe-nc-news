import { Link } from 'react-router-dom'

function ArticleStub({article}) {
    return (
        <li className='article'>
            <Link className='link' to={`/articles/${article.article_id}`}>
            <h3 className='article'>{article.title}</h3>
            </Link>
            <h4><span className="topicLine">{article.topic}</span> <span className ="byline">{article.author}</span></h4>
            <p>Score:{article.votes} Replies:{article.comment_count}</p>
        </li>
    )
}

export default ArticleStub