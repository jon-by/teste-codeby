import React from "react";
import ItemImage from "./ItemImage";
import ItemInfo from "./ItemInfo";
import { Wrapper, Image, Info } from "./CartItem.styled";

const CartItem = ({ name, price, sellingPrice, imageUrl, ...rest }) => {
  return (
    <Wrapper>
      <Image>
        <ItemImage imageURL={imageUrl} alt={name} />
      </Image>
      <Info>
        <ItemInfo name={name} price={price} sellingPrice={sellingPrice} />
      </Info>
    </Wrapper>
  );
};
export default CartItem;
