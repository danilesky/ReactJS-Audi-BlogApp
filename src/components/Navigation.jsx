import React from "react";
import { Link } from "react-router-dom";
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

const NavLink = styled.a`
  cursor: pointer;
  color: white;
`;

const NavLogo = styled.img`
  stroke: white;
  height: 40px;
`;
const Navigation = () => {
  return (
    <NavWrapper>
      <NavList>
        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link to="/">
          <NavLogo src={logo} />
        </Link>
        <Link to="/blog">
          <NavLink>Blog</NavLink>
        </Link>
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;
