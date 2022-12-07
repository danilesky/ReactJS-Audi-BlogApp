import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Navigation from "./components/Navigation";
import PostList from "./components/PostList";
import Title from "./components/typography/Title";
import Blog from "./screens/Blog";
import Home from "./screens/Home";

const AppWrap = styled.div`
  padding-top: 120px;
`;

function App() {
  const [screen, setScreen] = useState("HOME");

  const screenHandler = (route) => {
    setScreen(route);
  };
  return (
    <AppWrap>
      <div className="App">
        <Navigation setRoute={screenHandler} />
        {screen === "HOME" && <Home />}
        {screen === "BLOG" && <Blog />}
      </div>
    </AppWrap>
  );
}

export default App;
