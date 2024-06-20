import { patchArticleVotesByID } from "../../api";
import { useState } from 'react';

function Article({article}) {

    const articleCopy = {...article}
    let [votes, setVotes] = useState(articleCopy.votes)
    let [err, setErr] = useState(false)

    const handleVote = (event) => {
        setErr(false)
        event.preventDefault();
        let voteType = 0;
        event.target.name === "positive" ? voteType = 1 : voteType = -1;
        setVotes(votes + voteType)

        patchArticleVotesByID(article.article_id, voteType)
        .then((totalVotes) => {
            setVotes(totalVotes)
        }).catch(() => {
            setErr(true)
            setVotes(votes - voteType)
        })
    }

    return (
        <li className="article">
            <h3 className="article">{article.title}</h3>
            <h4><span className="topicLine">{article.topic}</span> <span className ="byline">{article.author}</span></h4>
            <p className = "articleBody">{article.body}</p>
            <p className="timestamp">{article.created_at.slice(0,10)}</p>
            <p>Score:{votes} Replies:{article.comment_count}</p>
            <button name="positive" onClick={handleVote}>+1</button>
            <button name="negative" onClick={handleVote}>-1</button>
            {err ? <p>Vote unsuccessful, try again shortly</p> : <br></br>}
        </li>
    )
}

export default Article;