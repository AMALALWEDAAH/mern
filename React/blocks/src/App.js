import React from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/main';
import SubContents from './components/subContents';
import Advertisement from './components/advertisement';
 
                
function App() {
  return (
    <div className="app">
    <Header />
      <Navigation />
      <Main>
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisement />
      </Main>
    </div>
  );
}
                
export default App;

