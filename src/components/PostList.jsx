import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/posts.service";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //Async fetch posts
    const asyncFn = async () => {
      const data = await fetchPosts("someUrl.com");
      if (data) {
        //save data to posts
        setPosts(data.list);
      }
    };
    asyncFn();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PostList;
