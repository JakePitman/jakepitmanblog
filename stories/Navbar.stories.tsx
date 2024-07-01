import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@components/Navbar";
import { AnimationContextProvider } from "@contexts/animationContext";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  decorators: [
    (Story) => (
      <AnimationContextProvider>
        <div className="w-screen h-screen">
          <Story />
        </div>
      </AnimationContextProvider>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
