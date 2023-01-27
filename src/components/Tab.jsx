import React from "react";
import styled from "styled-components";

const StyledTab = styled.div`
  border:1px solid #d7dfe9;
  width: 174px;
  height: 24px;
  padding: 8px 12px;
  text-align:center;
  background: ${({ selected }) =>
    selected ? "rgba(11, 105, 255, 1)" : "rgba(215, 223, 233, 0.24)"};
  color: ${({ selected }) => (selected ? "#FFF" : "rgba(23, 31, 70, 1)")};
  & + & {
    border-left:0;
  }
  &:last-child {
    border-radius:0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &:first-child {
    border-radius:0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;
function Tab({ text, selected,id }) {
  return <StyledTab id={id} selected={selected}>{text}</StyledTab>;
}

export default Tab;
