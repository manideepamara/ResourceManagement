import styled from "styled-components";

export const FormTitle = styled.h1`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #171f46;
`;

export const Label = styled.h6`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #7e858e;
`;

export const TextBox = styled.input`
  width: ${({ width }) => `${width || 304}px`};
  height: ${({ height }) => `${height || 24}px`};
  border: 1px solid #d7dfe9;
  color: ${({ color }) => color || "#171F46"};
  outline: none;
  padding: 8px 0 8px 16px;
  @media(max-width:320px){
    width:250px;
  }
`;
export const DropDown = styled.select`
@media(max-width:320px){
    width:250px;
  }
  width: ${({ width }) => `${width || 320}px`};
  height: ${({ height }) => `${height || 40}px`};
  border: 1px solid #d7dfe9;
  color: ${({ color }) => color || "#171F46"};
  outline: none;
  appearance: none;
  background-position: calc(100% - 18px) center;
  background-repeat: no-repeat;
  padding: 8px 0 8px 16px;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 1.12648L1.15074 0L6 4.74704L10.8493 0L12 1.12648L6.69953 6.31521C6.3108 6.69575 5.68919 6.69575 5.30046 6.31521L0 1.12648Z' fill='%23171F46'/%3E%3C/svg%3E%0A");
`;

export const TextArea = styled.textarea`
@media(max-width:320px){
    width:250px;
  }
  width: ${({ width }) => `${width || 304}px`};
  height: ${({ height }) => `${height || 24}px`};
  border: 1px solid #d7dfe9;
  color: ${({ color }) => color || "#171F46"};
  outline: none;
  padding: 8px 0 8px 16px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;
export const ItemWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
