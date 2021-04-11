import React from "react";
import { formatPriceBRL } from "./utils";
import { InfoWrapper, Price, Name, SellingPrice } from "./ItemInfo.styled";

const ItemInfo = ({ name, price, sellingPrice }) => {
  return (
    <InfoWrapper>
      <Name>{name}</Name>
      <Price>{formatPriceBRL(price)}</Price>
      <SellingPrice>{formatPriceBRL(sellingPrice)}</SellingPrice>
    </InfoWrapper>
  );
};

export default ItemInfo;
