import styled from "styled-components";
import { COLORS } from "./constants";

export const Wrapper = styled.div`
  width: 60%;
  min-width: 500px;
  background: ${COLORS.WHITE};
  border-radius: 20px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.3);
  min-height: 200px;
  z-index: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  padding: 1rem;
  font-size: 2rem;
  font-weight: 800;
`;

export const Content = styled.div`
  height: 100%;
`;

export const ItemsWrapper = styled.div`
  padding: 15px 0;
`;

export const Footer = styled.div``;

export const TotalWrapper = styled.div`
  padding: 30px;
`;

export const ButtonWrapper = styled.div`
  padding: 30px;
`;
