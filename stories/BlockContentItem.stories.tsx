import type { Meta, StoryObj } from "@storybook/react";
import { BlockContent } from "@components/BlockContent";
import {
  DUMMY_BLOCK_CONTENT_NO_MARKS,
  DUMMY_BLOCK_CONTENT_STRONG,
  DUMMY_BLOCK_CONTENT_EM,
  DUMMY_BLOCK_CONTENT_UNDERLINE,
  DUMMY_BLOCK_CONTENT_STRIKETHROUGH,
  DUMMY_BLOCK_CONTENT_STRONG_EM_UNDERLINE_STRIKETHROUGH,
  DUMMY_BLOCK_CONTENT_INLINE_CODE,
  DUMMY_BLOCK_CONTENT_WITH_CODE_BLOCK,
  DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS,
} from "./dummyBlockContent";

const meta = {
  title: "Components/BlockContent",
  component: BlockContent,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    blockContent: [
      {
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
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BlockContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlockNoMarks: Story = {
  render: () => {
    return <BlockContent blockContent={DUMMY_BLOCK_CONTENT_NO_MARKS} />;
  },
};

export const BlockStrong: Story = {
  render: () => {
    return <BlockContent blockContent={DUMMY_BLOCK_CONTENT_STRONG} />;
  },
};

export const BlockEm: Story = {
  render: () => {
    return <BlockContent blockContent={DUMMY_BLOCK_CONTENT_EM} />;
  },
};

export const BlockUnderline: Story = {
  render: () => {
    return <BlockContent blockContent={DUMMY_BLOCK_CONTENT_UNDERLINE} />;
  },
};

export const BlockStrikethrough: Story = {
  render: () => {
    return <BlockContent blockContent={DUMMY_BLOCK_CONTENT_STRIKETHROUGH} />;
  },
};

export const BlockStrongEmUnderlineStrikethrough: Story = {
  render: () => {
    return (
      <BlockContent
        blockContent={DUMMY_BLOCK_CONTENT_STRONG_EM_UNDERLINE_STRIKETHROUGH}
      />
    );
  },
};

export const BlockInlineCode: Story = {
  render: () => {
    return <BlockContent blockContent={DUMMY_BLOCK_CONTENT_INLINE_CODE} />;
  },
};

export const WithLists: Story = {
  render: () => {
    return <BlockContent blockContent={DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS} />;
  },
};

export const WithCodeBlockPlugin: Story = {
  render: () => {
    return <BlockContent blockContent={DUMMY_BLOCK_CONTENT_WITH_CODE_BLOCK} />;
  },
};
