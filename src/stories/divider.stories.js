import React from "react";
import Divider from "../Divider";

export default {
  title: "Divider",
  component: Divider,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});
