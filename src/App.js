import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import GlobalStyle from './GlobalStyle';

import Header from './components/Header';
import Search from './components/Search';

// import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <div className="main">
          <Switch>
            <Route exact path="/" />
            <Route path="/search" component={Search} />
            <Redirect to="/" />
          </Switch>
          <div id="how-it-works"><h3>How it works</h3></div>
          <div id="about"><h3>About</h3></div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
