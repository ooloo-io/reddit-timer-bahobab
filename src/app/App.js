import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../style';
import { ContentContainer } from './App.style';
import Header from '../common/header';
import Footer from '../common/footer';
// import Hero from '../hero';
import HomePage from '../page-home';

// import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContentContainer>

        <Switch>
          <Route path="/search">Search Page</Route>
          <Route path="/terms">Terms Page</Route>
          <Route path="/">
            <HomePage />
            <p>Home Page</p>
          </Route>
          <Redirect to="/" />
        </Switch>
      </ContentContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
