import { useEffect, useState } from 'react';
import { getArticles, getArticleByID } from '../../api';
import Article from './Article';

function ArticlesList({ articles, setArticles }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getArticles()
        .then((fetchedArticles) => {
            return fetchedArticles.map((article) => {
                return getArticleByID(article.article_id)
            })
        }).then((articlePromises) => {
            return Promise.all(articlePromises)
        }).then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        })
    }, []);

    if(!isLoading)
    return (
        <div className='articleBox'>
            <ul className = "articlesList">
                {articles.map((article) => {
                    return <Article key={article.article_id} article={article} />
                })}
            </ul>
        </div>
    )
}

export default ArticlesList;