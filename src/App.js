import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import GlobalStyle from './GlobalStyle';

// import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">Home</Route>
          <Route path="/search">Search</Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
