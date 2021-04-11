import React from "react";
import { formatPriceBRL } from "./utils";
import { Wrapper } from "./ShowTotal.styled";

const ShowTotal = ({ total }) => {
  return (
    <Wrapper>
      <span>Total</span>
      <span>{formatPriceBRL(total)}</span>
    </Wrapper>
  );
};

export default ShowTotal;
