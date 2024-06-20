import { useState, useContext } from "react";
import { UserContext } from '../../contexts/UserContext'
import { deleteCommentByID } from '../../api'

function Comment({comment}) {

    const [isDeleted, setIsDeleted] = useState(false);
    const [err, setErr] = useState(false);
    const { user } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsDeleted(true);

        deleteCommentByID(comment.comment_id)
        .then(() => {
            setIsDeleted(true);
        })
        .catch(() => {
            setIsDeleted(false);
            setErr(true);
        })
    }

    return (
        <li className="comment">
            {err ? <p>Comment could not be deleted, please try again shortly</p> : <br></br>}
            {!isDeleted?<div>
            <h4 className="comment">{comment.author}<span className="commentTimestamp">{comment.created_at.slice(0,10)}</span></h4>
            <p className="commentBody">{comment.body}</p>
            <p>Score:{comment.votes}</p>
            {comment.author === user ? <button className = 'deleteButton' onClick = {handleSubmit}>Delete</button> : <p />}
            </div>
        :<p>Comment deleted!</p>}
        </li>
    )
}

export default Comment