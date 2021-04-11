import React from "react";
import ShowTotal from "../ShowTotal";

export default {
  title: "ShowTotal",
  component: ShowTotal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <ShowTotal {...args} />;

export const Default = Template.bind({});

Default.args = {
  total: 300,
};
