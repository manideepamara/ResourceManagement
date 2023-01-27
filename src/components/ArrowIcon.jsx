import React from "react";

function ArrowIcon({ left, formArrow }) {
  if (formArrow) {
    return (
      <svg
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.87352 1.34331e-08L7 1.15074L2.25296 6L7 10.8493L5.87352 12L0.684789 6.69953C0.304253 6.3108 0.304254 5.68919 0.684789 5.30046L5.87352 1.34331e-08Z"
          fill="#171F46"
        />
      </svg>
    );
  }
  if (left) {
    return (
      <svg
        width="9"
        height="12"
        viewBox="0 0 9 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.16 1.41L3.58 6L8.16 10.59L6.75 12L0.750004 6L6.75 0L8.16 1.41Z"
          fill="#C4CDD5"
        />
      </svg>
    );
  }
  return (
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.839996 1.41L5.42 6L0.839996 10.59L2.25 12L8.25 6L2.25 0L0.839996 1.41Z"
        fill="#C4CDD5"
      />
    </svg>
  );
}

export default ArrowIcon;
