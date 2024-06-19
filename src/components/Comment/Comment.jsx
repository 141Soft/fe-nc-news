function Comment({comment}) {
    return (
        <li className="comment">
            <h4 className="comment">{comment.author}<span className="commentTimestamp">{comment.created_at.slice(0,10)}</span></h4>
            <p className="commentBody">{comment.body}</p>
            <p>Score:{comment.votes}</p>
        </li>
    )
}

export default Comment