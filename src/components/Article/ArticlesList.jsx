import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticles, getArticlesByTopic } from '../../api';
import ArticleStub from './ArticleStub';

function ArticlesList({ articles, setArticles }) {

    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=> {
        if(searchParams.get("topic")){
            getArticlesByTopic(searchParams.get("topic"))
            .then((fetchedArticles) => {
                setArticles(fetchedArticles);
                setIsLoading(false);
            })
        }
        else{
            getArticles()
            .then((fetchedArticles) => {
                setArticles(fetchedArticles);
                setIsLoading(false);
            })
        }


        
    }, [searchParams]);

    if(!isLoading)
    return (
        <div className='articleBox'>
            <ul className = "articlesList">
                {articles.map((article) => {
                    return <ArticleStub key={article.article_id} article={article} />
                })}
            </ul>
        </div>
    )
}

export default ArticlesList;