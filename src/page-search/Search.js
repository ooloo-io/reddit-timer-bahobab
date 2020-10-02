import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';

import {
  Form, Input, Label, Button,
} from './Search.style';

const history = createBrowserHistory();

function Search() {
  const [url, setUrl] = useState('javascript');
  const baseUrl = window.location.origin;

  function handleChange(evt) {
    setUrl(evt.target.value);
  }

  history.listen(() => {
    setUrl('javascript');
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    const nextUrl = `${baseUrl}/search/${url}`;
    window.history.pushState({ state: 'search page' }, '', nextUrl);
  }

  useEffect(() => {
    const defaultReddit = window.location.pathname.split('/')[2];
    setUrl(defaultReddit || 'javascript');
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        r/
        <Input
          type="text"
          value={url}
          name="subreddit"
          onChange={handleChange}
        />
      </Label>
      <Button>Search</Button>
      <pre>
        URL:
        {JSON.stringify(window.location)}
      </pre>
    </Form>
  );
}

export default Search;
