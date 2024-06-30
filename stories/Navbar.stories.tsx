import type { Meta, StoryObj } from "@storybook/react";
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

export const Primary: Story = {
  args: {},
};
