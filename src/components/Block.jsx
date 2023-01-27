import React from "react";
import styled from "styled-components";

/**
 *
 * border - > selected #0B69FF, #D7DFE9
 * background: rgba(215, 223, 233, 0.24) ,disabled: 919EAB
 * color: #171F46, selected #0B69FF
 *
 */

const StyledBlock = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? "solid 1px #0B69FF" : "solid 1px #D7DFE9")};
  background: ${({ disabled }) =>
    disabled ? "#919EAB" : "rgba(215, 223, 233, 0.24)"};
  color: ${({ selected }) => (selected ? "#0B69FF" : "#171F46")};
  border-radius:4px;
  cursor:pointer;
`;
function Block({ children, ...rest }) {
  return <StyledBlock {...rest}>{children}</StyledBlock>;
}

export default Block;
