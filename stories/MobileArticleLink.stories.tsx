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

const genericArgs = {
  createdAt: "2022-01-01T00:00:00Z",
  title: "The Strongest of the Strange",
  slug: "my-cool-slug",
  description:
    "You won't see them often. For wherever the crowd is, they are not. Those odd ones, not many - but from them come the few good paintings, the few good symphonies, the few good books.",
  tags: [
    { value: "Tag 1" },
    { value: "Tag 2" },
    { value: "Tag 3" },
    { value: "Tag 4" },
    { value: "Tag 5" },
    { value: "Tag 6" },
    { value: "Tag 7" },
    { value: "Tag 8" },
  ],
};
export const Basic: Story = {
  args: genericArgs,
};
export const WithLongTitle: Story = {
  args: {
    ...genericArgs,
    title: "The Strongest of the Strange: A Poem by Charles Bukowski",
  },
};
