import React from 'react';
import logo from './avatar_cartoon.png';
import './App.css';
import Animation from './Animation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo rythm-bass" alt="logo" />
        <Animation />
        <a
          className="App-link"
          href="http://www.dadamugamazino.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my site! :-)
        </a>
      </header>
    </div>
  );
}

export default App;
