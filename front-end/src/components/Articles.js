import React, { useState, useEffect } from 'react';
import axiosWithAuth, { getId } from '../utils/axiosWithAuth';
import ArticleCard from './ArticleCard';

function Articles(props) {
    const [getArticles, setGetArticles] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('articles')
            .then(result => {
                console.log(result);
                setGetArticles(result.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <>
            {getArticles.length > 0 && getArticles.map(article => <ArticleCard article={article} />)}
        </>
    )
}
export default Articles;
