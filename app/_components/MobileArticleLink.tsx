"use client";
import { useState } from "react";
import { FormattedDate, FormattedMessage } from "react-intl";
import { LuChevronDownSquare, LuChevronUpSquare } from "react-icons/lu";
import { Bebas_Neue } from "next/font/google";
import cx from "classnames";
import { BsBoxArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

import styles from "./mobileArticleLink.module.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

type BlogEntryProps = {
  createdAt: string;
  title: string;
  slug: string;
  description: string;
  tags: { value: string }[];
};
export const MobileArticleLink = ({
  createdAt,
  title,
  slug, // TODO: Use this to link to blog site when completed
  description,
  tags,
}: BlogEntryProps) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-300 mb-16 pt-4 pb-8 px-8 w-11/12 shadow-sm border-1 border-slate-600">
      <div className="w-full flex items-start mb-2">
        <div className="flex items-center overflow-hidden flex-grow mb-4">
          <div className="relative text-left overflow-hidden">
            <h3
              className={cx("text-24 relative", bebasNeue.className, {
                [styles.title]: !isExpanded,
                [styles.titleExpanded]: isExpanded,
              })}
            >
              {title}
            </h3>
          </div>
        </div>

        <div className="h-full  text-slate-900 text-24 mt-[1px]">
          {isExpanded ? (
            <button onClick={() => setIsExpanded(false)}>
              <LuChevronUpSquare />
            </button>
          ) : (
            <button onClick={() => setIsExpanded(true)}>
              <LuChevronDownSquare />
            </button>
          )}
        </div>
      </div>

      {isExpanded && (
        <p className="text-14 my-3 border-l-[6px] border-slate-800 pl-12 text-slate-800">
          {description}
        </p>
      )}

      <div
        className={cx("flex justify-between items-center", {
          "flex-wrap": isExpanded,
        })}
      >
        <div
          className={cx("relative overflow-scroll w-full", styles.tagContainer)}
        >
          {!isExpanded && (
            <div
              className={cx(
                "absolute h-full right-0 w-[10px]",
                styles.tagContainerFadeBar
              )}
            />
          )}
          <div
            className={cx("flex flex-grow", styles.tagContainer, {
              "overflow-scroll": !isExpanded,
              "flex-wrap": isExpanded,
            })}
          >
            {tags.map(({ value }, i) => (
              <p
                className={cx(
                  "text-14 bg-slate-500 py-4 px-8 text-slate-900 mr-8",
                  styles.tag,
                  {
                    "mt-12": isExpanded,
                  }
                )}
                key={value + i}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
        <em
          className={cx(
            "text-12 text-slate-700 text-end flex justify-end items-center",
            {
              "w-full mt-12": isExpanded,
            }
          )}
        >
          <p
            className={cx("mr-12", {
              hidden: !isExpanded,
              "inline-block": isExpanded,
            })}
          >
            <FormattedDate value={createdAt} />
          </p>
          <hr className="flex-grow border-slate-600" />
          <button
            className="ml-12 bg-slate-900 text-14 py-4 px-8 text-slate-300 flex items-center"
            onClick={() => router.push(`/articles/${slug}`)}
          >
            <p className="inline-block mr-8 w-max">
              <FormattedMessage id="articles.go" defaultMessage="Go" />
            </p>
            <BsBoxArrowRight />
          </button>
        </em>
      </div>
    </div>
  );
};
