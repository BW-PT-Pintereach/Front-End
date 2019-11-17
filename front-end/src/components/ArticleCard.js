import React from 'react';

function ArticleCard(props) {
    return (
        <div>
            <h2>{props.article.title}</h2>
            <img src={props.article.image} alt={props.article.title} />
            <p>{props.article.summary}</p>
            <a href={props.article.link}>{props.article.link}</a>
        </div>
    )
} export default ArticleCard;