import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchPosts } from "../services/posts.service";
import Post from "./Post";
import Spinner from "react-bootstrap/Spinner";

const List = styled.div`
  max-width: 500px;
  width: 100%;
  margin: auto;
`;
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Async fetch posts
    const asyncFn = async () => {
      const data = await fetchPosts("someUrl.com");
      if (data) {
        //save data to posts
        setPosts(data.list);
        setLoading(false);
      }
    };
    asyncFn();
  }, []);
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
