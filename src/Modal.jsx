import React from "react";
import { Wrapper } from "./Modal.styled";

const Modal = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <Wrapper
      onClick={(e) =>
        e.target === e.currentTarget &&
        typeof onClose === "function" &&
        onClose()
      }
    >
      {children}
    </Wrapper>
  ) : null;
};

export default Modal;
