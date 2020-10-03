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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setSubreddit(event.target.value);
  }

  async function fetchSubReddit(subredditName) {
    const redditUrl = `https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100`;

    setLoading(true);
    const response = await fetch(redditUrl);
    if (response.ok && response.status === 200) {
      const redditData = await response.json();
      setPosts(redditData.data.children);
    } else {
      // setPosts
    }
    setLoading(false);
  }

  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    // const subRedditUrl = `/search/${subreddit}`;
    history.push(`/search/${subreddit}`);

    fetchSubReddit(`${subreddit}`);
  }

  // update input value when URL is updated externally
  // (e.g. when user clicks on search link in header)
  useEffect(() => {
    setSubreddit(initialSubreddit);
    fetchSubReddit(initialSubreddit);
  }, [initialSubreddit]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          r /
          <Input
            type="text"
            value={subreddit}
            name="subreddit"
            onChange={handleChange}
          />
        </Label>
        <Button>Search</Button>
      </Form>
      {
      loading ? <div>is loading</div> : (
        <div>
          {' '}
          Number of posts:
          {posts.length}
        </div>
      )
    }
    </Container>
  );
}

export default SubredditForm;
