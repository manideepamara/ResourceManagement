import React from "react";
import styled from "styled-components";
import BreadCrumb from "./BreadCrumb";
import Form from "./Form";

import rightImage from "./rightImage.png";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
    width:min(50%,720px);
    height:auto;
    @media(max-width:426px){
        width:100%;
        margin-top:20px;
    }
  }
`;

const BreadCrumbWrapper = styled.div`
   margin-top:24px;
   margin-bottom:114px;
`;
function CreateItem({tabList}) {

  return (
    <Wrapper>
      <div>
        <BreadCrumbWrapper>
            <BreadCrumb text={tabList[0]}/>
        </BreadCrumbWrapper>
        <Form />
      </div>
      <img src={rightImage} alt="" />
    </Wrapper>
  );
}

export default CreateItem;
