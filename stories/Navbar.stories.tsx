import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@components/Navbar";
import { AnimationContextProvider } from "@contexts/animationContext";
import { UserSettingsContextProvider } from "@contexts/userSettingsContext";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  decorators: [
    (Story) => (
      <UserSettingsContextProvider>
        <AnimationContextProvider>
          <div className="w-screen h-screen">
            <Story />
          </div>
        </AnimationContextProvider>
      </UserSettingsContextProvider>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
