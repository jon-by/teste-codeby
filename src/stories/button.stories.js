import React from "react";

import Button from "../Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "meu botão",
  size: "large",
};
