import React from "react";
import styled from "styled-components";
import Tab from "./Tab";

const StyledTabGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  flex-wrap:wrap;
  @media(max-width:600px){
    flex-direction:column;
    align-items:center;
  }
`;
function TabGroup({tabsList}) {
    console.log(tabsList)
  return (
    <StyledTabGroup>
     {tabsList.map((tab,idx)=> <Tab key={idx} {...tab}/>)}
    </StyledTabGroup>
  );
}

export default TabGroup;
