import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logoimg from "./Logoimg";
import { navlist } from "../config";

function Nav() {
  const [ data, setData ] = useState();

  useEffect(() => {
    fetch(navlist)
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  },[])

  return(
    <>
      <NavWrap>
        <NavLogo>
          <a href="/">
            <Logoimg />
          </a>
        </NavLogo>
        <Navlist>
          {data && data.models.map((el) => {
            return(
              <List key={el.id} value={el.name}>
                {el.name}
              </List>
            );
          })}
        </Navlist>
        <MenuBtn>
          <Link to="/Login" className="loginBtn">로그인</Link>
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
  height: 52px;
`;

const NavLogo = styled.h1`
  padding: 0;
  margin-bottom: 0;
  position: relative;
  top: -1px;
  z-index: 10;
`;

const MenuBtn = styled.label`
  display: flex;
  
  .loginBtn{
    cursor: pointer;
    color: black;
    padding-bottom: 0;
    margin: 0 10px;
    font-size: 14px;
    font-family: "FB New Gothic,Gotham Medium,system,sans-serif";
  }
`;

const BtnOne = styled.span`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-right : 5px;
`;

const Italic = styled.i`
  width: 18px;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  background-color: black;
`;

const Navlist = styled.ol`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const List = styled.li`
  font-weight: 550;
  font-size: 14px;
  font-family: "FB New Gothic,Gotham Medium,system,sans-serif";
  line-height: 1.25;
  text-transform: uppercase;
  list-style: none;
  padding-bottom: 0;
  margin: 0 10px;
  cursor: pointer;
`;
