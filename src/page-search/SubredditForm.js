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

  async function fetch100SubReddit(url) {
    const response = await fetch(url);
    const redditData = await response.json();
    return redditData.data.children;
  }

  async function fetchSubReddit(subredditName) {
    setLoading(true);
    let allSubreddit = [];

    allSubreddit = [...allSubreddit, ...(await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100`))];
    allSubreddit = [...allSubreddit, ...(await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100&after=t3_drl1d6`))];
    allSubreddit = [...allSubreddit, ...(await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100&after=t3_ccg6no`))];
    allSubreddit = [...allSubreddit, ...(await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100&after=t3_caufp8`))];
    allSubreddit = [...allSubreddit, ...(await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100&after=t3_e8o8oz`))];

    // console.log('>>allSubredit', allSubreddit);
    // from Johannes
    // https://github.com/ooloo-io/reddit-timer-bahobab/blob/master/cypress/support/commands.js#L60
    // 'https://www.reddit.com/r/javascript/top.json?t=year&limit=100&aft';
    // 'https://www.reddit.com/r/javascript/top.json?t=year&limit=100&after=t3_ccg6no';
    // 'https://www.reddit.com/r/javascript/top.json?t=year&limit=100&after=t3_caufp8';
    // 'https://www.reddit.com/r/javascript/top.json?t=year&limit=100&after=t3_e8o8oz';

    setPosts(allSubreddit);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          Number of posts:
          {posts.length}
        </div>
      )
    }
    </Container>

  );
}

export default SubredditForm;
