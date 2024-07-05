import type { Meta, StoryObj } from "@storybook/react";
import { MobileArticleLink } from "@components/MobileArticleLink";

const meta = {
  title: "Components/MobileArticleLink",
  component: MobileArticleLink,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <div className="w-screen h-max mt-8 flex flex-col items-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MobileArticleLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    createdAt: "2022-01-01T00:00:00Z",
    title: "The Strongest of the Strange",
    slug: "my-cool-slug",
    description:
      "You won't see them often. For wherever the crowd is, they are not. Those odd ones, not many - but from them come the few good paintings, the few good symphonies, the few good books.",
    tags: [
      { value: "tag1" },
      { value: "tag2" },
      { value: "tag3" },
      { value: "tag4" },
      { value: "tag5" },
      { value: "tag6" },
      { value: "tag7" },
    ],
  },
};
