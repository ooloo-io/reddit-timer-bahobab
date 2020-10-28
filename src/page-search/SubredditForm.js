import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
  Form, Input, Label,
} from './SubredditForm.style';
import Button from '../common/button';
import Container from '../common/container';

function SubredditForm() {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);

  function handleChange(event) {
    setSubreddit(event.target.value);
  }

  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    history.push(`/search/${subreddit}`);
  }

  // update input value when URL is updated externally
  // (e.g. when user clicks on search link in header)
  useEffect(() => {
    setSubreddit(initialSubreddit);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSubreddit]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          r/
          {' '}
          <Input
            type="text"
            value={subreddit}
            name="subreddit"
            onChange={handleChange}
          />
        </Label>
        <Button>Search</Button>
      </Form>
    </Container>

  );
}

export default SubredditForm;
