import React from "react";
import styled from "styled-components";

const sizing = (size) => {
  switch (size) {
    case "XL":
      return "40px";
    case "L":
      return "34px";
    case "M":
      return "24px";
    case "S":
      return "20px";
  }
  console.log(size);
};

const Title = styled.h1`
  font-size: 40px;
  line-height: 50px;
  color: red;
  color: ${(props) => {
    if (props.color) {
      return props.color;
    }
  }};
  font-size: ${(props) => {
    if (props.size) {
      return sizing(props.size);
    }
  }};
`;

export default Title;
