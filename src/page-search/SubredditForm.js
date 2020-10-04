import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
  Form, Image, ImageWrapper, Input, Label, ResultsWrapper, Results,
} from './SubredditForm.style';
import Button from '../common/button';
import Container from '../common/container';

function SubredditForm() {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  function handleChange(event) {
    setSubreddit(event.target.value);
  }

  async function fetch100SubReddit(url) {
    let response;
    try {
      response = await fetch(url);
      const redditData = await response.json();
      return redditData.data;
    } catch (error) {
      return null;
    }
  }

  async function fetchSubReddit(subredditName) {
    setLoading(true);
    let allSubreddit = [];
    let subRedditData;

    try {
      subRedditData = await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100`);
      allSubreddit = [...allSubreddit, ...subRedditData.children];

      subRedditData = await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100&after=${subRedditData.after}`);
      allSubreddit = [...allSubreddit, ...subRedditData.children];

      subRedditData = await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100&after=${subRedditData.after}`);
      allSubreddit = [...allSubreddit, ...subRedditData.children];

      subRedditData = await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100&after=${subRedditData.after}`);
      allSubreddit = [...allSubreddit, ...subRedditData.children];

      subRedditData = await fetch100SubReddit(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100&after=${subRedditData.after}`);
      allSubreddit = [...allSubreddit, ...subRedditData.children];
    } catch (error) {
      // console.log('ERROR in fetchSubreddit', error);
    }

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
      <ResultsWrapper>
        {
      isLoading ? (
        <Results>
          <ImageWrapper>
            <Image
              src="../mages/loading-spinner@2x.png"
              srcSet="../images/loading-spinner.png, ../images/loading-spinner@2x.png 2x, ../images/loading-spinner@3x.png 3x"
              alt="Is loading"
            />
          </ImageWrapper>
        </Results>
      ) : (
        <Results>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <span>Number of posts: {posts.length}</span>
        </Results>
      )
    }
      </ResultsWrapper>
    </Container>

  );
}

export default SubredditForm;
