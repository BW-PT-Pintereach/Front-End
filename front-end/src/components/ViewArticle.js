import React from 'react';

import ViewArticleWrapper from './styles/ViewArticleWrapper';
import ViewArticleImg from './styles/ViewArticleImg';

const ViewArticle = props => {
    return (
        <ViewArticleWrapper>
            <h1>{props.article.title}</h1>
            <ViewArticleImg src={props.article.image} alt={props.article.title} />
            <p>{props.article.summary}</p>
            <a href={props.article.link}>Link to Article</a>
        </ViewArticleWrapper>
    );
};

export default ViewArticle;
