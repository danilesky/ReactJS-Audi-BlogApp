import React, { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import Title from "./components/typography/Title";

function App() {
  return (
    <div className="App">
      <Title color="white" size={"L"}>
        This is my blogApp
      </Title>
      <PostList />
    </div>
  );
}

export default App;
