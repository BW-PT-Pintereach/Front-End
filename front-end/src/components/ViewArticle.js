import React from 'react';


const ViewArticle = props => {
    return (
        <div>
            <h1>{props.article.title}</h1>
            <img src={props.article.image} alt={props.article.title} />
            <p>{props.article.summary}</p>
            <a href={props.article.link}>Link to Article</a>
        </div>
    );
};

export default ViewArticle;
