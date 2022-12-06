import React, { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import Title from "./components/typography/Title";

function App() {
  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
