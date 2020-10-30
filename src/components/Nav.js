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
          <Link to="/Login" className="loginBtn">테슬라 계정</Link>
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
  position: fixed;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 20px;
  width: fill-available;
  height: 52px;
`;

const NavLogo = styled.h1`
  position: relative;
  color: black;
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 0;
  height: 100%;
  top: -1px;
  z-index: 10;
`;

const MenuBtn = styled.label`
  display: flex;
  padding: 10px 0 10px 10px;
  font-size: 14px;


  .loginBtn{
    cursor: pointer;
    color: black;
    margin: 0 10px;
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
  content: "";
  width: 18px;
  height: 2px;
  display: block;
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
  margin: 0 10px;
  cursor: pointer;
`;
