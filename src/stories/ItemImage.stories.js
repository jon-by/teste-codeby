import React from "react";
import ItemImage from "../ItemImage";

export default {
  title: "Item/Image",
  component: ItemImage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ItemImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  imageURL:
    "http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000",
  alt: "Image title",
};
