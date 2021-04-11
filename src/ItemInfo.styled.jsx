import styled from "styled-components";
import { COLORS } from "./constants";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
`;
export const Price = styled.span`
  font-size: 1.1rem;
  color: ${COLORS.LIGHT_GREY};
`;
export const SellingPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;
