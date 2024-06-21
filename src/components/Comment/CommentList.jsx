import { useEffect, useState } from 'react';
import { getCommentsByID } from '../../api';
import Comment from './Comment';
import PostComment from './PostComment';

function CommentList({article_id}) {
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(()=> {
        getCommentsByID(article_id)
        .then((fetchedComments) => {
            setComments(fetchedComments);
            setIsLoading(false);
        })
    }, []);

    if(!isLoading)
    return (
        <div className='commentsBox'>
            <PostComment article_id = {article_id} comments={comments} setComments = {setComments}/>
            <h4>Comments:</h4>
            <ul className='commentsList'>
                {comments.map((comment) => {
                    return <Comment key={comment.comment_id} comment={comment} />
                })}
            </ul>
        </div>
    )
}

export default CommentList