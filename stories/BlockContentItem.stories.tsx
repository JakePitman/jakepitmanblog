import type { Meta, StoryObj } from "@storybook/react";
import { BlockContentItem } from "@components/BlockContentItem";
import {
  DUMMY_BLOCK_CONTENT_NO_MARKS,
  DUMMY_BLOCK_CONTENT_STRONG,
  DUMMY_BLOCK_CONTENT_EM,
  DUMMY_BLOCK_CONTENT_UNDERLINE,
  DUMMY_BLOCK_CONTENT_STRIKETHROUGH,
  DUMMY_BLOCK_CONTENT_STRONG_EM_UNDERLINE_STRIKETHROUGH,
  DUMMY_BLOCK_CONTENT_INLINE_CODE,
  DUMMY_BLOCK_CONTENT_WITH_CODE_BLOCK,
} from "./dummyBlockContent";

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

export const BlockNoMarks: Story = {
  render: () => {
    return (
      <>
        {DUMMY_BLOCK_CONTENT_NO_MARKS.map((blockContent, i) => (
          <BlockContentItem key={i} blockContent={blockContent} />
        ))}
      </>
    );
  },
};

export const BlockStrong: Story = {
  render: () => {
    return (
      <>
        {DUMMY_BLOCK_CONTENT_STRONG.map((blockContent, i) => (
          <BlockContentItem key={i} blockContent={blockContent} />
        ))}
      </>
    );
  },
};

export const BlockEm: Story = {
  render: () => {
    return (
      <>
        {DUMMY_BLOCK_CONTENT_EM.map((blockContent, i) => (
          <BlockContentItem key={i} blockContent={blockContent} />
        ))}
      </>
    );
  },
};

export const BlockUnderline: Story = {
  render: () => {
    return (
      <>
        {DUMMY_BLOCK_CONTENT_UNDERLINE.map((blockContent, i) => (
          <BlockContentItem key={i} blockContent={blockContent} />
        ))}
      </>
    );
  },
};

export const BlockStrikethrough: Story = {
  render: () => {
    return (
      <>
        {DUMMY_BLOCK_CONTENT_STRIKETHROUGH.map((blockContent, i) => (
          <BlockContentItem key={i} blockContent={blockContent} />
        ))}
      </>
    );
  },
};

export const BlockStrongEmUnderlineStrikethrough: Story = {
  render: () => {
    return (
      <>
        {DUMMY_BLOCK_CONTENT_STRONG_EM_UNDERLINE_STRIKETHROUGH.map(
          (blockContent, i) => (
            <BlockContentItem key={i} blockContent={blockContent} />
          )
        )}
      </>
    );
  },
};

export const BlockInlineCode: Story = {
  render: () => {
    return (
      <>
        {DUMMY_BLOCK_CONTENT_INLINE_CODE.map((blockContent, i) => (
          <BlockContentItem key={i} blockContent={blockContent} />
        ))}
      </>
    );
  },
};

export const WithCodeBlockPlugin: Story = {
  render: () => {
    return (
      <>
        {DUMMY_BLOCK_CONTENT_WITH_CODE_BLOCK.map((blockContent, i) => (
          <BlockContentItem key={i} blockContent={blockContent} />
        ))}
      </>
    );
  },
};
