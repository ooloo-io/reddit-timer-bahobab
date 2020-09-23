import React from 'react';

import './App.css';

function App() {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/"><img src="./img/me-avatar.png" alt="logo" /></a>
      </div>
      <div className="menu">
        <nav>
          <ul className="menu">
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/search">
              <li>Search</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default App;
