import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    width: 100px;
    margin: 0 auto;
    margin-top: 100px;
    animation zoom 1000ms infinite;
`;
function Loader() {
  return <>
  <Wrapper>...</Wrapper>;
  </>
}

export default Loader;
