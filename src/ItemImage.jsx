import React from "react";
import { ImageWrapper } from "./ItemImage.styled";

const ItemImage = ({ imageURL, alt }) => {
  return (
    <ImageWrapper>
      <img src={imageURL} alt={alt} />
    </ImageWrapper>
  );
};

export default ItemImage;
