import React from 'react';

import { arrayOf, shape } from 'prop-types';

import {
  Headline,
  Container,
  PostsHeaderRow,
  PostRow,
  Cell,
  RedditLink,
  TitleWrapper,
} from './PostsTable.style';

function PostsTable({ posts }) {
  return (
    <Container data-testid="postsTable">
      <Headline>Posts</Headline>
      <PostsHeaderRow>
        <TitleWrapper>Title</TitleWrapper>
        <Cell>Time Posted</Cell>
        <Cell>Score</Cell>
        <Cell>Comments</Cell>
        <Cell>Author</Cell>
      </PostsHeaderRow>
      {
        posts
          .sort((post1, post2) => (
            new Date(post1.createdAt).getMinutes()) - (new Date(post2.createdAt).getMinutes()))
          .map((post, index) => {
            const {
              author, createdAt, title, comments, score, permalink,
            } = post;
            const timePosted = (new Date(createdAt)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const postUrl = `https://www.reddit.com${permalink}`;
            const authUrl = author !== '[deleted]'
              ? <RedditLink as="a" href={`https://reddit.com/u/${author}`} target="_blank" rel="noopener noreferrer">{author}</RedditLink>
              : author;
            return (
            // eslint-disable-next-line react/no-array-index-key
              <PostRow key={index} data-testid="postRow">
                <TitleWrapper><RedditLink as="a" href={postUrl} target="_blank" rel="noopener noreferrer">{title}</RedditLink></TitleWrapper>
                <Cell><div style={{ whiteSpace: 'nowrap' }}>{timePosted}</div></Cell>
                <Cell>{score}</Cell>
                <Cell>{comments}</Cell>
                <Cell>{authUrl}</Cell>
              </PostRow>
            );
          })
          }
    </Container>
  );
}

PostsTable.propTypes = {
  posts: arrayOf(shape).isRequired,
};

export default PostsTable;
