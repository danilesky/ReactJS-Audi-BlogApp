import React from "react";
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
const Navigation = ({ setRoute }) => {
  return (
    <NavWrapper>
      <NavList>
        <NavLink onClick={() => setRoute("HOME")}>Home</NavLink>
        <NavLogo src={logo} />
        <NavLink onClick={() => setRoute("BLOG")}>Blog</NavLink>
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;
