import type { Meta, StoryObj } from "@storybook/react";
import { ArticleNotFound } from "@components/ArticleNotFound";

const meta = {
  title: "Components/ArticleNotFound",
  component: ArticleNotFound,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  decorators: [
    (Story) => (
      <div className="w-screen h-screen flex justify-center items-center">
        <div style={{ width: "500px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ArticleNotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
