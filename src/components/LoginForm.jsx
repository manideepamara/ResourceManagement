import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import {
  ErrorMessage,
  FormTitle,
  FormWrapper,
  ItemWrapper,
  Label,
  TextBox,
} from "./formElements";
import NxtWaveLogo from "./BrandLogo";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  height: 100vh;
  ${FormWrapper} {
    border: solid 1px lightgrey;
    padding: min(calc(5%), 50px);
  }
`;
function LoginForm({ setIsAuth }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: false,
    password: false,
  });

  const onSubmit = () => {
    const { username, password } = formData;
    const isNotUserNameValid =
      username.length === 0 ||
      !username.match(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
      );
    if (isNotUserNameValid || password.length === 0) {
      setError({
        username: isNotUserNameValid,
        password: password.length === 0,
      });
      return;
    }
    setIsAuth(true);
  };
  return (
    <LoginWrapper>
      <FormWrapper
        onChange={(e) => {
          setFormData({ ...formData, [e.target.id]: e.target.value });
        }}
      >
        <FormTitle>Login</FormTitle>
        <ItemWrapper>
          <Label>username</Label>
          <TextBox type="tel" id={"username"}></TextBox>
          {error.username && <ErrorMessage>Username is invalid</ErrorMessage>}
        </ItemWrapper>
        <ItemWrapper>
          <Label>password</Label>
          <TextBox type={"password"} id={"password"}></TextBox>
          {error.password && <ErrorMessage>please fill the password</ErrorMessage>}
        </ItemWrapper>
        <Button bgColor={"#0B69FF"} text={"CREATE"} onClick={onSubmit} />
      </FormWrapper>
      <NxtWaveLogo />
    </LoginWrapper>
  );
}

export default LoginForm;
