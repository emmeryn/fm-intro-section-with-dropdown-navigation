import React from 'react';
import './App.css';
import {NavHeader} from './components/NavHeader';
import {Content} from './components/Content';
import heroDesktop from './images/image-hero-desktop.png';
import heroMobile from './images/image-hero-mobile.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavHeader />
      </header>
      <main>
        <Content/>
        <div>
          <picture>
              <source media="(min-width: 60rem)" srcSet={heroDesktop}/>
              <img src={heroMobile} alt="hero image"/>
          </picture>
        </div>
      </main>
    </div>
  );
}

export default App;
