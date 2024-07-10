"use client";
import { Bebas_Neue } from "next/font/google";
import cx from "classnames";
import { motion } from "framer-motion";

import { FormattedDate } from "@components/FormattedDate";
import { BlockContent } from "@components/BlockContent";
import { BlockContentItemData } from "@customTypes/BlockContentTypes";
import { Tag } from "@components/Tag";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

type ArticleProps = {
  createdAt: string;
  title: string;
  jpTitle: string;
  description: string;
  jpDescription: string;
  tags: { value: string }[];
  jpTags: { value: string }[];
  mainContent: BlockContentItemData[];
  jpMainContent: BlockContentItemData[];
};

const containerVariants = {
  hidden: { opacity: 0, left: 20 },
  showContent: { opacity: 1, left: 0 },
};

export const Article = ({
  createdAt,
  title,
  jpTitle,
  description,
  jpDescription,
  tags,
  jpTags,
  mainContent,
  jpMainContent,
}: ArticleProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="showContent"
      variants={containerVariants}
      className="w-full flex flex-col items-center mt-12 relative"
      transition={{ staggerChildren: 0.04 }}
    >
      <div className="w-full shadow-lg border-1 border-slate-600 p-8 sm:p-16 mb-16">
        <h1 className={cx("text-24 mb-8", bebasNeue.className)}>{title}</h1>

        <h3 className="border-l-8 border-slate-800 pl-8 mb-12">
          {description}
        </h3>

        <div className="flex flex-wrap mb-8">
          {tags.map(({ value }, i) => (
            <Tag label={value} key={value + i} />
          ))}
        </div>

        <em className="w-full flex items-center text-12">
          <hr className="flex-grow text-slate-500 mr-4" />
          <FormattedDate value={createdAt} />
        </em>
      </div>

      {/* Main content */}
      <div className="w-full shadow-lg border-1 border-slate-600 p-8 sm:p-16 mb-16">
        {<BlockContent blockContent={mainContent} />}
      </div>
    </motion.div>
  );
};
