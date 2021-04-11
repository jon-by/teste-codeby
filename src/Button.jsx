import React from "react";

import { ButtonWrapper } from "./Button.styled";

const Button = ({ label, variant, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} variant={variant}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;
