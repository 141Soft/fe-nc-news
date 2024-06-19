import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header/Header'
import ArticlesList from './components/Article/ArticlesList';

function App() {

    const [articles, setArticles] = useState([])
    return (
        <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route 
                    path="/" 
                    element={<ArticlesList articles={articles} setArticles={setArticles}/>} 
                />
            </Routes>
            
        </div>
        </BrowserRouter>
    )

}

export default App
