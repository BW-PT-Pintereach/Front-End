import React, { useState, useEffect } from 'react';
import axiosWithAuth, { getId } from '../utils/axiosWithAuth';
import SideBar from './SideBar';
import ArticleCard from './ArticleCard';
import { useHistory } from 'react-router-dom';

import ArticlePage from './styles/ArticlePage';
import ArticleCardsWrapper from './styles/ArticleCardsWrapper';
import Card from './styles/Card';
import ArticlesHeaderDiv from './styles/ArticlesHeaderDiv'
import ArticlesCardButton from './styles/ArticlesCardButton';

function Articles(props) {
    const [userArticles, setUserArticles] = useState([]);
    const [activeArticles, setActiveArticles] = useState([]);
    // const [modalMethod, setModalMethod] = useState()
    const history = useHistory();



    useEffect(() => {
        console.log(props.match.params.method)
        axiosWithAuth().get('articles')
            .then(result => {
                console.log(result);
                [setUserArticles, setActiveArticles].forEach(cb => cb(result.data.filter(article => `${article.user_id}` === `${getId()}`
                )));

            })
            .catch(error => {

                console.log('err', error);
            })
    }, [props.match.params.method])

    return (
        <ArticlePage>
            <SideBar articles={activeArticles} setActiveArticles={setActiveArticles} permanentArticles={userArticles} />
            <ArticleCardsWrapper>
                <ArticlesHeaderDiv>
                    <h2>Articles</h2>
                    <button onClick={e => { localStorage.removeItem('token'); history.push('/') }}>Log Out</button>
                </ArticlesHeaderDiv>
                <Card>
                    <h3>Add Article</h3>
                    <ArticlesCardButton onClick={() => history.push('/articles/add')}>+</ArticlesCardButton>
                </Card>
                {activeArticles.length > 0 && activeArticles.map(article => <ArticleCard key={article.id} article={article} setActiveArticles={setActiveArticles} activeArticles={activeArticles} />)}
            </ArticleCardsWrapper>

        </ArticlePage>
    )
}
export default Articles;
