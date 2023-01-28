import React from "react";
import styled from "styled-components";

import NxtWaveLogo from "./BrandLogo";
import Button from "./Button";
import PersonLogo from "./PersonLogo";

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 72px;
  align-items: center;
  border-bottom: solid 2px #d7dfe9;
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255, 0.8);
  justify-content:space-between;
  padding:0 40px;
  @media(max-width:320px){
    padding:0 20px;
  }
`;

const LogoWrapper = styled.div`

`;

const RightWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 32px;
  @media(max-width:321px){
    gap:20px;
  }
`;

function TopBar({ view,setView }) {
  return (
    <TopBarWrapper>
      <LogoWrapper>
        <NxtWaveLogo />
      </LogoWrapper>
      <RightWrapper>
        {view === "resource" && (
          <Button
            bgColor={"#2DCA73"}
            text={"ADD ITEM"}
            onClick={() => {
              setView("create")
            }}
          ></Button>
        )}
        <PersonLogo />
      </RightWrapper>
    </TopBarWrapper>
  );
}

export default TopBar;
