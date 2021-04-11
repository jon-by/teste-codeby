import React, { useState } from "react";
import { Wrapper, ButtonWrapper } from "./App.styled";
import Modal from "./Modal";
import Cart from "./Cart";
import Button from "./Button";
import { ABOVE10_URL, UNDER10_URL } from "./constants";

function App() {
  const [cartId, setCartId] = useState(false);

  const handleClose = () => {
    setCartId("");
  };
  const handleOpen = (id) => {
    setCartId(id);
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button
          onClick={() => handleOpen(ABOVE10_URL)}
          label="Com frete grátis"
          variant="primary"
        />
        <Button
          onClick={() => handleOpen(UNDER10_URL)}
          label="Sem frete grátis"
          variant="primary"
        />
      </ButtonWrapper>
      <Modal isOpen={!!cartId} onClose={handleClose}>
        <Cart cartId={cartId} onClose={handleClose} />
      </Modal>
    </Wrapper>
  );
}

export default App;
