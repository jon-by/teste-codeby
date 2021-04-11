import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div
      style={{
        fontFamily: '"Poppins", sans-serif',
        width: "100%",
        height: "100%",
      }}
    >
      <Story />
    </div>
  ),
];
