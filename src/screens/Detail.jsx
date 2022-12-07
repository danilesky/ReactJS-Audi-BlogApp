import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/typography/Title";

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  height: 100%;
  background: #0000009e;
  margin-top: -60px;
`;
const DetailImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
  margin-bottom: 20px;
`;

const DetailText = styled.p`
  font-size: 20px;
  line-height: 32px;
  padding: 0 20px;
`;
const Detail = ({ posts }) => {
  //React router hook to get id from url
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    posts.find((item) => {
      if (item.id == id) {
        setPost(item);
      }
    });
  }, [posts]);

  console.log(post);

  return (
    <DetailWrap>
      <NavLink to="/blog">
        <button>Back to Blog</button>
      </NavLink>
      <DetailImg src={post.image} />
      <Title marginBottom={"10px"}>{post.title}</Title>
      <DetailText>{post.text}</DetailText>
    </DetailWrap>
  );
};

export default Detail;
