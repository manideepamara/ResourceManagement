import React from "react";
import styled from "styled-components";


import ArrowIcon from "./ArrowIcon";


const Wrapper = styled.div`
    display:flex;
    gap:9px;
    font-size:12px;
    line-height:16px;
    font-weight:300;
    color:#7E858E;
    align-items:center;
    cursor:pointer;

`;
function BreadCrumb({ text }) {
  return (
    <Wrapper>
      <ArrowIcon formArrow />
      <span>{text}</span>
    </Wrapper>
  );
}

export default BreadCrumb;
