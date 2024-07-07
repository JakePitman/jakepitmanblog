import type { Meta, StoryObj } from "@storybook/react";
import { BlockContentItem } from "@components/BlockContentItem";
import { DUMMY_BLOCK_CONTENT } from "./dummyBlockContent";

const meta = {
  title: "Components/BlockContentItem",
  component: BlockContentItem,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    blockContent: {
      _type: "block",
      _key: "123",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "123",
          _type: "span",
          text: "Hello",
          marks: [],
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BlockContentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoMarks: Story = {
  render: () => {
    return (
      <>
        {DUMMY_BLOCK_CONTENT.map((blockContent, i) => (
          <BlockContentItem key={i} blockContent={blockContent} />
        ))}
      </>
    );
  },
};
