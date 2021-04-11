import styled from "styled-components";
import { COLORS } from "./constants";

export const VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const BG_COLOR = {
  [VARIANTS.PRIMARY]: {
    DEFAULT: COLORS.BLUE,
    HOVER: COLORS.LIGHT_BLUE,
  },
};

export const ButtonWrapper = styled.div`
  text-align: center;
  font-weight: 700;
  padding: 1.6rem;
  font-size: 2rem;
  border-radius: 12px;
  color: ${COLORS.WHITE};
  transition: background 200ms ease;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) => BG_COLOR[props.variant].DEFAULT};
  &:hover {
    background-color: ${(props) => BG_COLOR[props.variant].HOVER};
  }
`;
