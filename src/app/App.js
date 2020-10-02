import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../style';
import { ContentContainer } from './App.style';
import Header from '../common/header';
import Footer from '../common/footer';
import HomePage from '../page-home';
import SearchPage from '../page-search';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContentContainer>

        <Switch>
          <Route path="/search/:subreddit">
            <SearchPage />
            <p>Search Page</p>
          </Route>
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
