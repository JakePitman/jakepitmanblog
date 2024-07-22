import type { Meta, StoryObj } from "@storybook/react";
import { PortableTextConverter } from "@components/PortableTextConverter";
import {
  DUMMY_BLOCK_CONTENT_NO_MARKS,
  DUMMY_BLOCK_CONTENT_STRONG,
  DUMMY_BLOCK_CONTENT_EM,
  DUMMY_BLOCK_CONTENT_UNDERLINE,
  DUMMY_BLOCK_CONTENT_STRIKETHROUGH,
  DUMMY_BLOCK_CONTENT_STRONG_EM_UNDERLINE_STRIKETHROUGH,
  DUMMY_BLOCK_CONTENT_INLINE_CODE,
  DUMMY_BLOCK_CONTENT_LINKS,
  DUMMY_BLOCK_CONTENT_WITH_CODE_BLOCK,
  DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS,
  DUMMY_BLOCK_CONTENT_WITH_LONG_BLOCKQUOTE_AND_CODE,
  DUMMY_BLOCK_CONTENT_COMPREHENSIVE,
} from "./dummyBlockContent";

const meta = {
  title: "Components/PortableTextConverter",
  component: PortableTextConverter,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    portableText: [
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
} satisfies Meta<typeof PortableTextConverter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlockNoMarks: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_NO_MARKS },
};
export const BlockStrong: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_STRONG },
};
export const BlockEm: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_EM },
};
export const BlockUnderline: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_UNDERLINE },
};
export const BlockStrikethrough: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_STRIKETHROUGH },
};
export const BlockStrongEmUnderlineStrikethrough: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_STRONG_EM_UNDERLINE_STRIKETHROUGH },
};
export const BlockInlineCode: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_INLINE_CODE },
};
export const BlockLinks: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_LINKS },
};

export const WithLongBlockQuote: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_WITH_LONG_BLOCKQUOTE_AND_CODE },
};

export const WithLists: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS },
};

export const WithCodeBlockPlugin: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_WITH_CODE_BLOCK },
};

export const WithComprehensiveData: Story = {
  args: { portableText: DUMMY_BLOCK_CONTENT_COMPREHENSIVE },
};
