import React from "react";
import styled from "styled-components";

import SearchLogo from "./SearchLogo";

const StyledSearch = styled.div`
  width: 648px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(215, 223, 233, 1);
`;

const SearchLogoWrapper = styled.div`
  margin: 0;
  margin-left: 18px;
  margin-right: 16px;
`;

const StyledInput = styled.input`
  border: none;
  font-weight: 400;
  &::placeholder {
    color: rgba(126, 133, 142, 0.6);
  }
  outline:none;
`;
function Search() {
  return (
    <StyledSearch>
      <SearchLogoWrapper>
        <SearchLogo />
      </SearchLogoWrapper>
      <StyledInput placeholder="Search" type="text" />
    </StyledSearch>
  );
}

export default Search;
