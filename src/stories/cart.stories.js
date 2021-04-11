import React from "react";
import Cart from "../Cart";

export default {
  title: "Cart",
  component: Cart,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <Cart {...args} />;
export const Default = Template.bind({
  freeShipping: true,
});
