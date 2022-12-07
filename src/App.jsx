import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import PostList from "./components/PostList";
import Title from "./components/typography/Title";

function App() {
  return (
    <div className="App">
      <Navigation />
      <PostList />
    </div>
  );
}

export default App;
