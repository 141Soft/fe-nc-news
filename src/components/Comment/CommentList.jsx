import { useEffect, useState } from 'react';
import { getCommentsByID } from '../../api';
import Comment from './Comment';

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