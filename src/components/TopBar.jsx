import React from "react";
import styled from "styled-components";

import NxtWaveLogo from "./BrandLogo";
import Button from "./Button";
import PersonLogo from "./PersonLogo";

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 72px;
  align-items: center;
  border-bottom: solid 2px #d7dfe9;
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255, 0.8);
`;

const LogoWrapper = styled.div`
  flex: 1;
  margin-left: 48px;
`;

const RightWrapper = styled.div`
  margin-right: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
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
