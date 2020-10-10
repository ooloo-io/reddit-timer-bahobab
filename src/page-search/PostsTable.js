import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, number } from 'prop-types';

import {
  Headline, Table, Container, TableRow, TH,
} from './PostsTable.style';

function PostsTable({ posts }) {
  console.log('##### In PostTable', posts);
  React.useEffect(() => {

  });
  return (
    <Container>
      <Headline>Posts</Headline>
      <Table>
        <thead>
          <TableRow>
            <TH>Title</TH>
            <TH>Posted</TH>
            <TH>Score</TH>
            <TH>Comments</TH>
            <TH>Author</TH>
          </TableRow>
        </thead>
        <tbody>
          {
            posts.map((post, index) => {
              const {
                author, createdAt, title, comments, score, url,
              } = post;
              const timePosted = (new Date(createdAt)).toLocaleTimeString();
              return (
                <TableRow key={index}>
                  <td><Link as="a" href={url}>{title}</Link></td>
                  <td>{timePosted}</td>
                  <td>{score}</td>
                  <td>{comments}</td>
                  <td>{author}</td>
                </TableRow>
              );
            })
          }
        </tbody>
      </Table>
    </Container>
  );
}

PostsTable.propTypes = {
  // posts: arrayOf(number).isRequired,
};

export default PostsTable;
