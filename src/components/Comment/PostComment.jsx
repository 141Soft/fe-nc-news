import { useState, useContext } from "react";
import { UserContext } from '../../contexts/UserContext'
import { postCommentByArticleID } from "../../api";

function PostComment({article_id}) {
    const [newComment, setNewComment] = useState('');
    const [err, setErr] = useState(false);
    const [hasPosted, setHasPosted] = useState(false);
    const { user } = useContext(UserContext);

    const handleChange = (event) => {
        const { value } = event.target;
        setNewComment(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErr(false);
        setHasPosted(true);

        postCommentByArticleID(article_id, user, newComment)
        .then(() => {
            setHasPosted(false);
        })
        .catch(() => {
            setHasPosted(false);
            setErr(true);
        })
    }


    return (
        <div className ='postCommentBox'>
            {!hasPosted ?
                <form className ='commentForm'>
                <label>Write Comment:
                    <input 
                        required
                        onChange={handleChange}
                        name='commentField'
                        type='text'
                        placeholder='Your Comment Here'
                        value={newComment}
                    />
                </label>
                <button className='postButton' onClick={handleSubmit}>Post</button>
            </form>
            :<p>Thanks for commenting!</p> }
            {err ? <p>Post Failed, please try again shortly</p> : <br></br>}
        </div>
    )


}

export default PostComment