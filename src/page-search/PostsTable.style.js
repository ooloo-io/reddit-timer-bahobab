import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 786px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;

`;

export const Headline = styled.h3`
  text-align: left;
  width: 100%;
  /* max-width: 786px; */
  height: 28px;
  font-family: Bitter;
  font-size: 24px;
  font-weight: normal;
  color: #000000;
`;

export const PostsHeaderRow = styled.div`
  width: 786px;
  height: 35px;
  display: flex;
  font-weight: 500;
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.small};
`;

export const TH = styled.th`
/* width: 350px; */
height: 18px;
color: #000000;
padding: 10px;
text-align: left;
font-weight: 500;
font-family: ${(props) => props.theme.font.family.default};
font-size: ${(props) => props.theme.font.size.small};
`;

export const PostRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 786px;

  height: 35px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
`;

export const Cell = styled.div`
  /* position: relative; */
  /* width: 75%; */
  display: inline-block;
  max-width: 100px;
  height: 35px;
  padding: 10px;
  color: #000000;
  text-align: left;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.small};
`;

export const TitleWrapper = styled.div`
  width: 450px;
  position: relative;
  /* width: 200px; */
  padding: 10px;
  height: 35px;
  /* flex: 1; */
  color: #000000;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.small};
`;

export const RedditLink = styled(Link)`
  /* width: 100%; */
  /* width: 75%; */
  height: 35px;
  display: block;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.color.postsTable.link};
  font-size: ${(props) => props.theme.font.size.small};
  cursor: pointer;
`;
