import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  width: ${({ width }) => `${width || 304}px`};
  height: ${({ height }) => `${height || 24}px`};
  border: 1px solid #d7dfe9;
  color: ${({ color }) => color || "#171F46"};
  outline: none;
  padding: 8px 0 8px 16px;
`;
const DropDown = styled.select`
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

const TextArea = styled.textarea`
  width: ${({ width }) => `${width || 304}px`};
  height: ${({ height }) => `${height || 24}px`};
  border: 1px solid #d7dfe9;
  color: ${({ color }) => color || "#171F46"};
  outline: none;
  padding: 8px 0 8px 16px;
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

const ErrorMessage = styled.p`
  color: red;
`;
function Form({ setTabList, tabList }) {
  const [formData, setFormData] = useState({
    title: "",
    icon_url: "",
    link: "",
    description: "",
    category: "",
    tag: tabList.selected,
  });
  const [error, setError] = useState({
    title: false,
    icon_url: false,
    link: false,
    description: false,
    category: false,
  });
  const isValidFormData = () => {
    let isValid = true;
    const data = {
      title: false,
      icon_url: false,
      link: false,
      description: false,
      category: false,
    };
    const expression =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const regex = new RegExp(expression);
    if (formData.title.length == 0) {
      isValid = false;
      data.title = true;
    }
    if (!formData.link.match(regex)) {
      isValid = false;
      data.link = true;
    }
    if (!formData.icon_url.match(regex)) {
      isValid = false;
      data.icon_url = true;
    }
    if (formData.category.length === 0) {
      isValid = false;
      data.category = true;
    }
    if (formData.description.length === 0) {
      isValid = false;
      data.description = true;
    }
    return { isValid, data };
  };
  const onSubmit = () => {
    const { isValid, data } = isValidFormData();
    setError(data);
    if (!isValid) {
      toast.error("Failed at form validation", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme:"colored"
      });
      return;
    }
    fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json"
    )
      .then((res) => {
        console.log("success");
        return res.json();
      })
      .then((res) => {
        console.log(res);
        toast.success("Item created successfully", {
          position: toast.POSITION.BOTTOM_CENTER,
          theme:"colored"
        });
      })
      .catch((e) => {
        console.log(e, "failed");
        toast.error("API Failure", {
          position: toast.POSITION.BOTTOM_CENTER,
          theme:"colored"
        });
      });
  };
  return (
    <>
      <FormWrapper
        onChange={(e) => {
          setFormData({ ...formData, [e.target.id]: e.target.value });
        }}
      >
        <FormTitle>Item Details</FormTitle>
        <ItemWrapper>
          <Label>item title</Label>
          <TextBox type="text" id="title" />
          {error.title && (
            <ErrorMessage>Title should not be empty</ErrorMessage>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Label>link</Label>
          <TextBox type="text" color="#0B69FF" id="link" />
          {error.link && <ErrorMessage>Link Should be valid</ErrorMessage>}
        </ItemWrapper>
        <ItemWrapper>
          <Label>icon url</Label>
          <TextBox type="text" color="#0B69FF" id="icon_url" />
          {error.icon_url && (
            <ErrorMessage>icon path Should be valid</ErrorMessage>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Label>tag name</Label>
          <DropDown
            id="tag"
            onChange={(e) => {
              setTabList({ ...tabList, selected: parseInt(e.target.value) });
            }}
          >
            {tabList.items.map((tab, idx) =>
              idx === tabList.selected ? (
                <option value={idx} defaultValue key={idx}>
                  {tab}
                </option>
              ) : (
                <option value={idx} key={idx}>
                  {tab}
                </option>
              )
            )}
          </DropDown>
        </ItemWrapper>
        <ItemWrapper>
          <Label>category</Label>
          <TextBox type="text" id="category" />
          {error.category && (
            <ErrorMessage>category Should be mandatory</ErrorMessage>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Label>description</Label>
          <TextArea type="text" height={64} width={296} id="description" />
          {error.description && (
            <ErrorMessage>Description Should be mandatory</ErrorMessage>
          )}
        </ItemWrapper>
        <Button bgColor={"#0B69FF"} text={"CREATE"} onClick={onSubmit} />
      </FormWrapper>
      <ToastContainer />
    </>
  );
}

export default Form;
