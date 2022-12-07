import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Navigation from "./components/Navigation";
import PostList from "./components/PostList";
import Title from "./components/typography/Title";
import Blog from "./screens/Blog";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";

const AppWrap = styled.div`
  padding-top: 120px;
`;

function App() {
  return (
    <AppWrap>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <div className="App">
        <Navigation />
      </div>
    </AppWrap>
  );
}

export default App;
