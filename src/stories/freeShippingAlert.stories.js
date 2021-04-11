import React from "react";
import FreeShippingAlert from "../FreeShippingAlert";

export default {
  title: "Free Shipping",
  component: FreeShippingAlert,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <FreeShippingAlert {...args} />;

export const Default = Template.bind({});
