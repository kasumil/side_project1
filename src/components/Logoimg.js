import React from "react";
import styled from "styled-components";

function Logoimg() {
  return(
    <>
      <Logo 
      src="data:image/svg+xml;charset=UTF-8,%3csvg 
      xmlns='http://www.w3.org/2000/svg' 
      viewBox='0 0 342 35' 
      preserveAspectRatio='xMidYMid Meet' 
      width='342' 
      height='35'%3e%3cpath 
      class='tds-icon-fill--primary' 
      d='M0 .1a9.7 9.7 0 007 6.93h10.93l.56.22v27.58h6.82V7.29l.62-.22h10.94a9.82 9.82
      0 007-6.93V.07H0V.1zM238.61.06h-6.8v34.85h31.14a9.68 9.68 0 005.94-6.86h-30.3l.02-27.99zm-52.33 
      6.86c3.62-1 6.66-3.82 7.39-6.88l-38.1.06v20.55h31.17v7.23h-24.46a13.6 13.6 0 00-8.71 7h39.89V13.81H162.3V6.92h23.98zm116.17 
      27.97h6.76V20.87h24.58v14.02h6.75V13.87l-38.09-.04zM85.35 7h26a9.57 9.57 0 007.05-7H78.3a9.61 9.61 0 007.05 7zm0 13.77h26a9.59
      9.59 0 007.05-7H78.3a9.63 9.63 0 007.05 7zm0 14.14h26a9.59 9.59 0 007.05-7H78.3a9.62 9.62 0 007.05 7zM308.46 7.02h26a9.58 9.58 
      0 007.06-7h-40.11a9.59 9.59 0 007.05 7z' fill='%23fff'/%3e%3c/svg%3e" 
      />
      <Stick>Tesla, Inc</Stick>
    </>
  )
}

export default Logoimg;


const Logo = styled.img`
  width: 100px;
  height: 24px;
  cursor: pointer;
  filter: invert(1);
`;

const Stick = styled.span`
  block-size: 1px;
  inline-size: 1px;
  margin: -1px;
  clip-path: inset(100%);
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;