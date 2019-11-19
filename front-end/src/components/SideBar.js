import React, {useState, useEffect} from 'react';

const SideBar = (props) => {
    const [someState, setSomeState] = useState('');
    const categories = props.articles.reduce((runningArray, category) => runningArray.includes(category.category_name) ? [...runningArray] : [...runningArray, category.category_name],[])
    
    const filterArticles = query => {
        query = query.toLowerCase();
        query === 'all' ? props.setActiveArticles(props.articles) : props.setActiveArticles(props.articles.filter(article => article.category_name.toLowerCase() === query));
    }
    
    return (
        <div>
            <div>
                <h2>Categories</h2>
            </div>
            {categories.length >= 1 && ['All', ...categories].map(category => <a key={category}><h3 onClick={(e) => filterArticles(e.target.innerText)}>{category}</h3></a>)}
        </div>
    )
};

export default SideBar;