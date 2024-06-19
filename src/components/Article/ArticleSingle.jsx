import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getArticleByID } from "../../api";
import Article from "./Article";
import CommentList from "../Comment/CommentList";

function ArticleSingle () {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticleByID(article_id)
        .then((fetchedArticle) => {
            setArticle(fetchedArticle);
            setIsLoading(false);
        })
    }, [article_id]);

    if(!isLoading)
    return <div className = "singleArticleView">
        <Article key={article.article_id} article={article} />
        <CommentList article_id={article_id} />
    </div>
}

export default ArticleSingle;