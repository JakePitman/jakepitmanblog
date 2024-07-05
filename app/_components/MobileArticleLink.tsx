"use client";
import { useState } from "react";
import { FormattedDate } from "react-intl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Bebas_Neue } from "next/font/google";
import { useIntl } from "react-intl";
import cx from "classnames";
import { BsBoxArrowRight } from "react-icons/bs";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const intl = useIntl();

  const alertMessage = intl.formatMessage({
    id: "blogSiteComingSoon",
    defaultMessage:
      "Jake is currently working on a blog site. Once it's complete, you can link to articles from here. Please stay tuned!",
  });

  return (
    <div className="bg-slate-300 mb-16 last:mb-0 pt-4 pb-8 px-8 w-11/12 shadow-sm border-1 border-slate-500">
      <div className="w-full flex items-start mb-2">
        <div className="flex items-center overflow-hidden flex-grow mb-4">
          <button
            className="relative text-left overflow-hidden"
            onClick={() => alert(alertMessage)}
          >
            <h3
              className={cx("text-24 relative", bebasNeue.className, {
                [styles.title]: !isExpanded,
                [styles.titleExpanded]: isExpanded,
              })}
            >
              {title}
            </h3>
          </button>
        </div>

        <div className="h-full mt-8 text-slate-900">
          {isExpanded ? (
            <button onClick={() => setIsExpanded(false)}>
              <FaChevronUp />
            </button>
          ) : (
            <button onClick={() => setIsExpanded(true)}>
              <FaChevronDown />
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
          <button className="ml-12 bg-slate-900 text-14 py-4 px-8 text-slate-300 flex items-center">
            <p className="inline-block mr-8">Go</p>
            <BsBoxArrowRight />
          </button>
        </em>
      </div>
    </div>
  );
};
