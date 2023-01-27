import React from "react";
import styled from "styled-components";
import Tab from "./Tab";

const StyledTabGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  cursor:pointer;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
function TabGroup({tabsList, onTabChange }) {
  return (
    <StyledTabGroup
      onClick={(e) => {
        onTabChange({
          ...tabsList,
          selected: parseInt(e.target.id),
        });
      }}
    >
      {tabsList.items.map((tab, idx) => (
        <Tab
          key={idx}
          id={idx}
          text={tab}
          selected={tabsList.selected === idx}
        />
      ))}
    </StyledTabGroup>
  );
}

export default TabGroup;
