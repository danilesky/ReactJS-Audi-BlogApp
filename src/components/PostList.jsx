import React from "react";
import styled from "styled-components";
import Post from "./Post";
import Spinner from "react-bootstrap/Spinner";

const List = styled.div`
  max-width: 500px;
  width: 100%;
  margin: auto;
`;
const PostList = ({ posts, loading }) => {
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <List>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </List>
    </>
  );
};

export default PostList;
