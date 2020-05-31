import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/organims/Header';
import ArticleMain from './components/template/ArticleMain'
import InputStandard from './components/atoms/InputStandard';

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleMain />
      <InputStandard placeholder='COEPINGUIN' />
    </div>
  );
}

export default App;
