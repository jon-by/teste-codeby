import React from "react";

import { SpinnerStyled, SpinnerWrapper } from "./Loader.styled";
const Spinner = ({ color = "#bcc8c7" }) => {
  return (
    <SpinnerWrapper>
      <SpinnerStyled color={color}>
        <div></div>
        <div></div>
        <div></div>
      </SpinnerStyled>
    </SpinnerWrapper>
  );
};

export default Spinner;
