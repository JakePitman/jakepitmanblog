import type { Meta, StoryObj } from "@storybook/react";

import ContactForm from "@/app/(routes)/contact/page";

const meta = {
  title: "Pages/Contact",
  component: ContactForm,
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
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
