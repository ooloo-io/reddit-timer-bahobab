import React, { useState, useEffect } from 'react';

import {
  Form, Input, Label, Button,
} from './Search.style';

function Search(props) {
  const [url, setUrl] = useState('javascript');
  const baseUrl = window.location.origin;

  function handleChange(evt) {
    setUrl(evt.target.value);
  }

  // window.addEventListener('popstate', (evt) => {
  //   if (!evt.explicitOriginalTarget.pathname) {

  //   } else {
  //     const defaultReddit = evt.explicitOriginalTarget.pathname.split('/')[2];
  //     setUrl(defaultReddit);
  //   }
  // });

  function handleSubmit(evt) {
    evt.preventDefault();
    const nextUrl = `${baseUrl}/search/${url}`;
    window.history.pushState({ state: 'search page' }, '', nextUrl);
    // setUrl('');
    // return
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
        {JSON.stringify(props)}
      </pre>
    </Form>
  );
}

export default Search;
