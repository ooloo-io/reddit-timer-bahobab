import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../style';
import { ContentContainer } from './App.style';
import Header from '../header';
import Hero from '../hero';
import Footer from '../footer';

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
            <Hero />
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
