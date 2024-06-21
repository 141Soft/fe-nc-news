import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../../api';
import ArticleStub from './ArticleStub';
import ArticleSort from './ArticleSort';

function ArticlesList({ articles, setArticles }) {

    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=> {
        getArticles(searchParams.get("topic"))
        .then((fetchedArticles) => {
            if(searchParams.get("sort")){
                const sortBy = searchParams.get("sort")
                searchParams.get("order") === 'desc'
                ? fetchedArticles.sort((a,b) => { return a[sortBy] - b[sortBy]})
                : fetchedArticles.sort((a,b) => { return b[sortBy] - a[sortBy]})
            }
            
            setArticles(fetchedArticles);
            setIsLoading(false);
        })
    }, [searchParams]);

    if(!isLoading)
    return (
        <div>
            <ArticleSort searchParams={searchParams} setSearchParams={setSearchParams}/>
            <div className='articleBox'>
                <ul className = "articlesList">
                    {articles.map((article) => {
                        return <ArticleStub key={article.article_id} article={article} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ArticlesList;