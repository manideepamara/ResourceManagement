import React from "react";
import styled from "styled-components";

import Card from './Card';


const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content:flex-start;
  width: min(calc(80%), 1144px);
  margin: 0 auto;
  margin-top:32px;
`;
function CardList({ cards }) {
  return (
    <StyledCardList>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </StyledCardList>
  );
}

export default CardList;
