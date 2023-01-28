import React from "react";
import styled from "styled-components";

import logo from "./image.png";

const StyledImg = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor:pointer;
`;
function PersonLogo({ onClick }) {
  return <StyledImg onClick={onClick} src={logo} alt="person" />;
}

export default PersonLogo;
