import React, { useState } from "react";
import styled from "styled-components";
import { createDesc } from "../functions/createDesc";
import { AiFillStar } from "react-icons/ai";
import Title from "./typography/Title";

const PostWrapper = styled.div`
  background: #0000009e;
  margin-bottom: 45px;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  gap: 5px;
  transition: 1s ease;
  cursor: pointer;
  &:hover {
    img {
      transform: scale(1.1);
      transition: 0.5s ease;
    }
  }
`;
const PostImgWrap = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  z-index: 0;
`;
const PostImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  position: relative;
  z-index: 0;
  transition: 0.5s ease;
`;
const Content = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StarIcon = styled(AiFillStar)`
  width: 26px;
  height: 26px;
  color: white;
  align-self: flex-end;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    color: #ffdd00;
    transition: 0.3s ease;
  }
  ${(props) => {
    if (props.isActive) {
      return "color: #ffdd00;";
    }
  }}
`;

const Post = ({ post }) => {
  const [selected, setSelected] = useState(false);
  const description = createDesc(post.text);

  const selectedHandler = () => {
    setSelected(!selected);
  };
  return (
    <PostWrapper>
      <PostImgWrap>
        <PostImg src={post.image} alt="" />
      </PostImgWrap>
      <Content>
        <Title color={"white"} size={"L"}>
          {post.title}
        </Title>
        <p>{description}</p>
        <button>Read more</button>
        <StarIcon onClick={selectedHandler} isActive={selected} />
      </Content>
    </PostWrapper>
  );
};

export default Post;
