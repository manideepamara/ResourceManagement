import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    color: red;
    text-align: center;
    width: min(250px,calc(80%));
    margin: 0 auto;
    margin-top: 100px;
    animation zoom2 1000ms infinite;
    border:0px solid red;
 
`;
function Failure() {
  return (
    <Wrapper>
      OOPS, Something went wrong with fetching. Please try again.
    </Wrapper>
    
  );
}

export default Failure;
