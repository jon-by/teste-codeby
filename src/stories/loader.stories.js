import React from "react";
import Loader from "../Loader";

export default {
  title: "Loader",
  component: Loader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: "red",
};
