import React from "react";
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
      <button>Visit Blog</button>
    </>
  );
};

export default Home;
