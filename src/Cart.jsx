import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Header,
  Title,
  Content,
  Footer,
  TotalWrapper,
  ButtonWrapper,
  ItemsWrapper,
} from "./Cart.styled";
import CartItem from "./CartItem";
import Divider from "./Divider";
import StyledButton from "./Button";
import FreeShippingAlert from "./FreeShippingAlert";
import ShowTotal from "./ShowTotal";
import Loader from "./Loader";
import { BASE_URL, FREE_SHIPPING_MIN } from "./constants";

const Cart = ({ cartId, onClose }) => {
  const [items, setItems] = useState([]);
  const [cartValue, setCartValue] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cartId) {
      setLoading(true);

      fetch(BASE_URL + cartId)
        .then((raw) => raw.json())
        .then((data) => {
          setItems(data.items);
          setCartValue(data.value);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  }, [cartId]);

  return (
    <Wrapper>
      <Header>
        <Title>Meu carrinho</Title>
      </Header>
      <Divider />
      {loading ? (
        <Loader />
      ) : (
        <Content>
          <ItemsWrapper>
            {items.map((item) => {
              return <CartItem key={item.uniqueId} {...item} />;
            })}
          </ItemsWrapper>
          <Divider />
          <TotalWrapper>
            <ShowTotal total={cartValue} />
            {cartValue / 100 > FREE_SHIPPING_MIN && <FreeShippingAlert />}
          </TotalWrapper>
        </Content>
      )}

      <Footer>
        <Divider />
        <ButtonWrapper>
          <StyledButton
            onClick={() => onClose()}
            variant="primary"
            label="Finalizar compra"
          />
        </ButtonWrapper>
      </Footer>
    </Wrapper>
  );
};

export default Cart;
