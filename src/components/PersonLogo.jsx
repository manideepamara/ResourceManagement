import React from "react";
import styled from "styled-components";

import logo from "./image.png";

const StyledImg = styled.img`
  width:40px;
  border-radius:50%;
  @media(max-width:320px){
    display:none;
  }
`;
function PersonLogo() {
  return <StyledImg src={logo} alt="person" />;
}

export default PersonLogo;
