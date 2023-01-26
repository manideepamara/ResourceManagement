import React from 'react';
import styled from "styled-components";



const StyledButton = styled.button`
    padding: 8px 20px;
    background: ${({bgColor})=>bgColor};
    border:none;
    border-radius:4px;
    color:#FFF;
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight:500;
    font-style:normal;
    line-height:24px;
    font-size:14px;
    width:107px;
    height:40px;
`;
function Button({ bgColor, text, onClick }) {
  return (
    <>
      <StyledButton bgColor={bgColor} onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
}

export default Button;