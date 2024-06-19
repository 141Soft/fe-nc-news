import { useEffect, useState } from 'react';
import { getArticles } from '../../api';
import ArticleStub from './ArticleStub';

function ArticlesList({ articles, setArticles }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getArticles()
        .then((fetchedArticles) => {
            setArticles(fetchedArticles);
            setIsLoading(false);
        })
    }, []);

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