import React from "react";
import styled from "styled-components";
import { createDesc } from "../functions/createDesc";

const PostWrapper = styled.div`
  margin-bottom: 45px;
  background: #00000031;
  padding: 20px;
  border-radius: 10px;
`;
const PostImg = styled.img`
  width: 100%;
`;

const Post = ({ post }) => {
  const description = createDesc(post.text);
  return (
    <PostWrapper>
      <PostImg src={post.image} alt="" />
      <h3>{post.title}</h3>
      <p>{description}</p>
      <button>Read more</button>
    </PostWrapper>
  );
};

export default Post;
