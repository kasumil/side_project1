import React from "react";
import styled from "styled-components";
import Logoimg from "./Logoimg";

function Nav() {
  return(
    <>
      <NavWrap>
        <NavLogo>
          <a href="/">
            <Logoimg />
          </a>
        </NavLogo>
        <MenuBtn>
          <BtnOne>
            <Italic></Italic>
          </BtnOne>
        </MenuBtn>
      </NavWrap>
    </>
  )
}

export default Nav;

const NavWrap = styled.div`
  align-content: center;
  max-width: none;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 20px;
`;

const NavLogo = styled.h1`
  padding: 0;
  margin-bottom: 0;
  position: relative;
  top: -1px;
  z-index: 10;
`;

const MenuBtn = styled.label``;

const BtnOne = styled.span`

`;

const Italic = styled.i`
  content: "";
  display: block;
  height: 2px;
  height: calc(var(--tds-menu-header-spacer)/10);
  position: absolute;
`;