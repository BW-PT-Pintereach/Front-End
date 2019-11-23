import React from 'react';
import { NavLink } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import Card from './styles/Card';
import ArticleBtnWrapper from './styles/ArticleBtnWrapper';
import ArticleEditButton from './styles/ArticleEditButton';
import ArticleDeleteButton from './styles/ArticleDeleteButton';

function ArticleCard(props) {

    const deleteArticle = (e) => {
        e.persist();
        axiosWithAuth().delete(`articles/${e.target.getAttribute('article_id')}`)
            .then(res => {
                alert('Article Successfully Deleted')
                console.log('id', e.target);
                props.setActiveArticles(
                    props.activeArticles.filter(article => article.id !== +e.target.getAttribute('article_id'))
                )
                window.location.replace('/articles');
            })
            .catch(err => console.log(err))
    }

    return (
        <Card>
            <NavLink to={{ pathname: `/articles/view/${props.article.id}`, article: props.article }}>
                <h2>{props.article.title}</h2>
                <img src={props.article.image} alt={props.article.title} />
                
            </NavLink>
            <ArticleBtnWrapper>
                <ArticleEditButton to={{ pathname: "/articles/edit", article: props.article }}>Edit</ArticleEditButton>

                <button className="deleteButton" article_id={props.article.id} onClick={(e) => deleteArticle(e)}>Delete</button>
            </ArticleBtnWrapper>

        </Card>
    )
} export default ArticleCard;