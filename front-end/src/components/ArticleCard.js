import React from 'react';
import { NavLink } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

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
        <div>
            <h2>{props.article.title}</h2>
            <img src={props.article.image} alt={props.article.title} />
            {/* <p>{props.article.summary}</p> */}
            {/* <a href={props.article.link}>{props.article.link}</a> */}

            {/* <button article_id={props.article.id} type="button" onClick={(e) => }>Edit</button> */}
            <NavLink to={{ pathname: "/articles/edit", article: props.article }}>Edit</NavLink>

            <button article_id={props.article.id} type="button" onClick={(e) => deleteArticle(e)}>Delete</button>

        </div>
    )
} export default ArticleCard;