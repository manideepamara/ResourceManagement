import React from "react";
import styled from "styled-components";
import Button from "./Button";

const FormTitle = styled.h1`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #171f46;
`;

const Label = styled.h6`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #7e858e;
`;

const TextBox = styled.input`
    width:${({ width }) => `${width || 304}px`};
    height:${({ height }) => `${height || 24}px`};
    border: 1px solid #D7DFE9;
    color:${({ color }) => color || "#171F46"};
    outline:none;
    padding:8px 0 8px 16px;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;
const ItemWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
function Form() {
  return (
    <FormWrapper>
      <FormTitle>Item Details</FormTitle>
      <ItemWrapper>
        <Label>item title</Label>
        <TextBox type="text" />
      </ItemWrapper>
      <ItemWrapper>
        <Label>link</Label>
        <TextBox type="text" color="#0B69FF" />
      </ItemWrapper>
      <ItemWrapper>
        <Label>icon url</Label>
        <TextBox type="text" color="#0B69FF" />
      </ItemWrapper>
      <ItemWrapper>
        <Label>tag name</Label>
        <TextBox type="text" color="#0B69FF" />
      </ItemWrapper>
      <ItemWrapper>
        <Label>category</Label>
        <TextBox type="text"  />
      </ItemWrapper>
      <ItemWrapper>
        <Label>description</Label>
        <TextBox type="text" height={64} width={296} />
      </ItemWrapper>
      <Button bgColor={"#0B69FF"} text={"CREATE"}/>
    </FormWrapper>
  );
}

export default Form;
