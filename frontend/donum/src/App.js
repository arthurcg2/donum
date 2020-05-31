import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/organims/Header';
import ArticleMain from './components/template/ArticleMain'

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleMain />
    </div>
  );
}

export default App;
