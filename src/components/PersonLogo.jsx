import React from "react";

import logo from "./image.png";

function PersonLogo() {
  return <img style={{
    width:"40px",
    borderRadius:"50%"
  }}src={logo} alt="person" />;
}

export default PersonLogo;
