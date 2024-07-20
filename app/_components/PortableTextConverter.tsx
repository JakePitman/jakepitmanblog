import { PortableTextItem } from "@components/PortableTextItem";
import { groupListItems } from "@utils/groupListItems";
import {
  PortableTextItem as PortableTextItemType,
  PortableTextWithListItemsGrouped,
} from "@customTypes/PortableTextTypes";

type WrappedInListProps = {
  listItemType: "bullet" | "number";
  level: number;
  children: React.ReactNode;
};
const WrappedInList = ({
  listItemType,
  level,
  children,
}: WrappedInListProps) => {
  if (listItemType === "bullet") {
    return (
      <ul className="list-disc" style={{ marginLeft: `${level * 1.5}em` }}>
        {children}
      </ul>
    );
  }
  if (listItemType === "number") {
    return (
      <ol className="list-decimal" style={{ marginLeft: `${level * 1.5}em` }}>
        {children}
      </ol>
    );
  }
};

type PortableTextConverterProps = {
  portableText: PortableTextItemType[];
};
export const PortableTextConverter = ({
  portableText,
}: PortableTextConverterProps) => {
  const blockContentWithListItemsGrouped: PortableTextWithListItemsGrouped =
    groupListItems(portableText);

  return (
    <>
      {blockContentWithListItemsGrouped.map((blockContentItem, i) => {
        if (blockContentItem._type === "groupedListItems") {
          return (
            <WrappedInList
              listItemType={blockContentItem.listItem}
              key={i}
              level={blockContentItem.level}
            >
              <>
                {blockContentItem.blockContent.map((blockContentItem, i) => (
                  <PortableTextItem key={i} item={blockContentItem} />
                ))}
              </>
            </WrappedInList>
          );
        }

        return <PortableTextItem key={i} item={blockContentItem} />;
      })}
    </>
  );
};
