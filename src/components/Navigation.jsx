import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
`;

const NavList = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  color: white;
  &.active {
    color: #7371ef;
  }
`;

const NavLogo = styled.img`
  stroke: white;
  height: 40px;
`;
const Navigation = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavLink to="/" activeclassname={"active"}>
          Home
        </NavLink>
        <NavLink to="/">
          <NavLogo src={logo} />
        </NavLink>
        <NavLink to="/blog" activeclassname={"active"}>
          Blog
        </NavLink>
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;
