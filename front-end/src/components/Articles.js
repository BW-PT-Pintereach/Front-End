import React, { useState, useEffect } from 'react';
import axiosWithAuth, { getId } from '../utils/axiosWithAuth';

function Articles(props) {
    const [getArticles, setGetArticles] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('articles')
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <>
            <h2>articles</h2>
        </>
    )
}
export default Articles;
