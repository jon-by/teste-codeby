import React from "react";
import { Wrapper, Alert } from "./FreeShippingAlert.styled";
const FreeShippingAlert = () => {
  return (
    <Wrapper>
      <Alert>
        <span>Parabéns, sua compra tem frete grátis!</span>
      </Alert>
    </Wrapper>
  );
};
export default FreeShippingAlert;
