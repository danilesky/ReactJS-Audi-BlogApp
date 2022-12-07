import React from "react";
import PostList from "../components/PostList";

const Blog = ({ posts, loading }) => {
  return (
    <div>
      <PostList loading={loading} posts={posts} />
    </div>
  );
};

export default Blog;
