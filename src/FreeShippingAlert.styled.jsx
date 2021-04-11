import styled from "styled-components";
import { COLORS } from "./constants";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Alert = styled.div`
  border-radius: 50px;
  background: ${COLORS.LIGHT_GREEN};
  padding: 10px;
  text-align: center;
  span {
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.GREEN};
    font-size: 1.4rem;
  }
`;
