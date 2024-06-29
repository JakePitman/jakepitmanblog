import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#DAD4BB",
        },
        {
          name: "white",
          value: "white",
        },
        {
          name: "black",
          value: "black",
        },
      ],
    },
  },
};

export default preview;
