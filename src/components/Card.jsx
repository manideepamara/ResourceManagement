import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: min(336px, calc(90%));
  height: 168px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding-left: 22px;
  padding-top: 22px;
`;
const Icon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d7dfe9;
  > img {
    width:20px;
    height:20px;
  }
`;

const Link = styled.a`
  height: 24px;
  color: #0b69ff;
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
`;

const Desc = styled.div`
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  color: #7e858e;
  width: min(calc(90%), 312px);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media(max-width:376px){
    display:none;
  }
`;
const Title = styled.div`
  height: 24px;
  color: #171f46;
  font-size: 16px;
  font-weight: 400;
`;
const Category = styled.div`
  height: 16px;
  color: #7e858e;
`;

const TitleAndCategoryWrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 376px) {
    flex-direction: column;
  }
`;
function Card({ title, icon_url, link, description, category, tag, id }) {
  return (
    <StyledCard>
      <Wrapper>
        <Icon>
          <img src={icon_url} alt={""} />
        </Icon>
        <TitleAndCategoryWrapper>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </TitleAndCategoryWrapper>
      </Wrapper>
      <Link>{link}</Link>
      <Desc>{description}</Desc>
    </StyledCard>
  );
}

export default Card;
