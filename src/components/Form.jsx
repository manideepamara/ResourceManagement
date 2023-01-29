import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "./Button";
import {
  DropDown,
  ErrorMessage,
  FormTitle,
  ItemWrapper,
  FormWrapper,
  Label,
  TextArea,
  TextBox,
} from "./formElements";
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
    tag: false,
  });
  const isValidFormData = () => {
    let isValid = true;
    const data = {
      title: false,
      icon_url: false,
      link: false,
      description: false,
      category: false,
      tag: false,
    };
    const expression =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const regex = new RegExp(expression);
    if (formData.title.length === 0) {
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
    if (formData.tag === 0) {
      isValid = false;
      data.tag = true;
    }
    return { isValid, data };
  };
  const onSubmit = () => {
    const { isValid, data } = isValidFormData();
    setError(data);
    if (!isValid) {
      toast.error("Failed at form validation", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: "colored",
      });
      return;
    }
    setFormData({
      title: "",
      icon_url: "",
      link: "",
      description: "",
      category: "",
      tag: tabList.selected,
    });

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
          theme: "colored",
        });
      })
      .catch((e) => {
        console.log(e, "failed");
        toast.error("API Failure", {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: "colored",
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
          <TextBox type="text" id="title" value={formData.title} />
          {error.title && (
            <ErrorMessage>Title should not be empty</ErrorMessage>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Label>link</Label>
          <TextBox
            type="text"
            color="#0B69FF"
            id="link"
            value={formData.link}
          />
          {error.link && <ErrorMessage>Link Should be valid</ErrorMessage>}
        </ItemWrapper>
        <ItemWrapper>
          <Label>icon url</Label>
          <TextBox
            type="text"
            color="#0B69FF"
            id="icon_url"
            value={formData.icon_url}
          />
          {error.icon_url && (
            <ErrorMessage>icon path Should be valid</ErrorMessage>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Label>tag name</Label>
          <DropDown
            id="tag"
            defaultValue={tabList.selected}
            onChange={(e) => {
              setTabList({ ...tabList, selected: parseInt(e.target.value) });
            }}
          >
            {tabList.items.map((tab, idx) => (
              <option value={idx} key={idx}>
                {tab}
              </option>
            ))}
          </DropDown>
          {error.tag && (
            <ErrorMessage>tag should be either user/request</ErrorMessage>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Label>category</Label>
          <TextBox type="text" id="category" value={formData.category} />
          {error.category && (
            <ErrorMessage>category Should be mandatory</ErrorMessage>
          )}
        </ItemWrapper>
        <ItemWrapper>
          <Label>description</Label>
          <TextArea
            type="text"
            height={64}
            width={296}
            id="description"
            value={formData.description}
          />
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
