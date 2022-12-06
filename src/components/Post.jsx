import React, { useState } from "react";
import styled from "styled-components";
import { createDesc } from "../functions/createDesc";
import { AiFillStar } from "react-icons/ai";
import Title from "./typography/Title";

const PostWrapper = styled.div`
  margin-bottom: 45px;
  background: #0000009e;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
const PostImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const Content = styled.div`
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
      <PostImg src={post.image} alt="" />
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
