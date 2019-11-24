import React from 'react';

import SideBarWrapper from './styles/SideBarWrapper';
import SideBarArticlesBtn from './styles/SideBarArticlesBtn';

const SideBar = (props) => {
    const categories = props.permanentArticles.reduce((runningArray, category) => runningArray.includes(category.category_name) ? [...runningArray] : [...runningArray, category.category_name], []);

    const filterArticles = query => {
        query = query.toLowerCase();
        console.log(query, props.articles)
        query === 'all' ? props.setActiveArticles(props.permanentArticles) : props.setActiveArticles(props.permanentArticles.filter(article => article.category_name.toLowerCase() === query));
    };

    return (
        <SideBarWrapper>
            <div>
                <h2>Categories</h2>
            </div>
            {categories.length >= 1 && ['All', ...categories].map(category => <SideBarArticlesBtn key={category} onClick={(e) => filterArticles(e.target.innerText)}>{category}</SideBarArticlesBtn>)}
        </SideBarWrapper>
    );
};

export default SideBar;