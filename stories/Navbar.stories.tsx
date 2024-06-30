import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Navbar } from "@components/Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  decorators: [
    (Story) => (
      <div className="w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
