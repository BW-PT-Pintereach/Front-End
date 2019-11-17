import React, { useState, useEffect } from 'react';
import axiosWithAuth, { getId } from '../utils/axiosWithAuth';
import ArticleCard from './ArticleCard';

function Articles(props) {
    const [getArticles, setGetArticles] = useState([]);

    const [activeArticles, setActiveArticles] = useState([]);

    const retrieveActiveArticles = (query) => {
        query.toLowerCase() === 'all' ? setActiveArticles(getArticles) : setActiveArticles(getArticles.filter(article => article.category_name.toLowerCase() === query.toLowerCase()))
    }

    useEffect(() => {
        axiosWithAuth().get('articles')
            .then(result => {
                console.log(result);
                [setGetArticles, setActiveArticles].forEach(cb => cb(result.data.filter(article => `${article.user_id}` === `${getId()}`
                )));

            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <>
            {activeArticles.length > 0 && activeArticles.map(article => <ArticleCard key={article.id} article={article} />)}
        </>
    )
}
export default Articles;
