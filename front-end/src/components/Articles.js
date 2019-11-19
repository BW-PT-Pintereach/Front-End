import React, { useState, useEffect } from 'react';
import axiosWithAuth, { getId } from '../utils/axiosWithAuth';
import SideBar from './SideBar';
import ArticleCard from './ArticleCard';

function Articles(props) {
    const [userArticles, setUserArticles] = useState([]);
    const [activeArticles, setActiveArticles] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('articles')
            .then(result => {
                console.log(result);
                [setUserArticles, setActiveArticles].forEach(cb => cb(result.data.filter(article => `${article.user_id}` === `${getId()}`
                )));

            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <>
            <SideBar articles={userArticles} setActiveArticles={setActiveArticles}/>
            {activeArticles.length > 0 && activeArticles.map(article => <ArticleCard key={article.id} article={article} />)}
        </>
    )
}
export default Articles;
