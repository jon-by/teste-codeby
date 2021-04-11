import React from "react";
import ItemInfo from "../ItemInfo";

export default {
  title: "Item/Info",
  component: ItemInfo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ItemInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Trufa BENDITO CACAU 55% CACAU 30 G",
  price: 303,
  sellingPrice: 273,
};
