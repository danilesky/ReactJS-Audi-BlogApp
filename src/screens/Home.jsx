import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../components/typography/Title";

const Home = () => {
  return (
    <>
      <Title size={"XL"} line={"20px"}>
        Welcome to AUDI
      </Title>
      <Title size={"S"} weight={400} marginBottom={"10px"}>
        Read our articles
      </Title>
      <NavLink to="/blog">
        <button>Visit Blog</button>
      </NavLink>
    </>
  );
};

export default Home;
