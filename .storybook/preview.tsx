import React from "react";
import { decorators } from "@storybook/addon-backgrounds/preview";
import type { Preview } from "@storybook/react";
import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

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
  decorators: [
    (Story) => (
      <div className={inter.className}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
