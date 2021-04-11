import styled from "styled-components";
import { COLORS } from "./constants";
export const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid ${COLORS.LIGHT_GREY};
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  overflow: hidden;

  img,
  object {
    width: 100%;
    object-fit: contain;
  }
`;
