import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <img src={post.image} alt="" />
      <h3>{post.title}</h3>
      <p>{post.text}</p>
    </>
  );
};

export default Post;
