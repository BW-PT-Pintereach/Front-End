import React, {useState} from 'react';
import {CurrentArticleContext} from './context/CurrentArticleContext';
import './App.css';
import Routers from './components/Routers'

function App() {
  const [currentArticle, setCurrentArticle] = useState({});
  
  return (
    <CurrentArticleContext.Provider value={[currentArticle, setCurrentArticle]}>
      <div className="App">
        <Routers />
      </div>
    </CurrentArticleContext.Provider>
  );
}

export default App;
