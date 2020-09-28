import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../style';
import Header from '../header';
import Footer from '../footer';

// import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/search">Search Page</Route>
        <Route path="/terms">Terms Page</Route>
        <Route path="/">Home Page</Route>
        <Redirect to="/" />
      </Switch>
      {/* <div id="how-it-works"><h3>How it works</h3></div>
      <div id="about"><h3>About</h3></div> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
