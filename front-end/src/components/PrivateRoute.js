import React, {useContext} from 'react';
import {CurrentArticleContext} from '../context/CurrentArticleContext';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) =>{  
     const [article, setArticle] = useContext(CurrentArticleContext)
     return <Route {...rest} render={props => localStorage.getItem('token') !== null ? (<Component {...props} currentArticle={article} />) : (<Redirect to='/' />)} />
}

export default PrivateRoute;