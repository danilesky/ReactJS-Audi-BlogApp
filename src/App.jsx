import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Navigation from "./components/Navigation";
import Blog from "./screens/Blog";
import Home from "./screens/Home";
import { Routes, Route, useParams } from "react-router-dom";
import Detail from "./screens/Detail";
import { fetchPosts } from "./services/posts.service";

const AppWrap = styled.div`
  padding-top: 120px;
`;

function App() {
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
    <AppWrap>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog loading={loading} posts={posts} />} />
        <Route path="/blog/:id" element={<Detail posts={posts} />} />
      </Routes>
      <div className="App">
        <Navigation />
      </div>
    </AppWrap>
  );
}

export default App;
