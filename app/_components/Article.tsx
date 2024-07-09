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
  description: string;
  tags: { value: string }[];
  mainContent: BlockContentItemData[];
};

export const showContentVariants = {
  hidden: { opacity: 0 },
  showContent: { opacity: 1 },
};

export const Article = ({
  createdAt,
  title,
  description,
  tags,
  mainContent,
}: ArticleProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="showContent"
      className="w-full flex flex-col items-center mt-12"
      transition={{ staggerChildren: 0.04 }}
    >
      <div className="w-11/12 max-w-768 shadow-lg border-1 border-slate-600 p-8 mb-16">
        <motion.h1
          variants={showContentVariants}
          className={cx("text-24 mb-8", bebasNeue.className)}
        >
          {title}
        </motion.h1>

        <motion.h3
          variants={showContentVariants}
          className="border-l-8 border-slate-800 pl-8 mb-12"
        >
          {description}
        </motion.h3>

        <motion.div
          variants={showContentVariants}
          className="flex flex-wrap mb-8"
        >
          {tags.map(({ value }, i) => (
            <Tag label={value} key={value + i} />
          ))}
        </motion.div>

        <motion.em
          variants={showContentVariants}
          className="w-full flex items-center text-12"
        >
          <hr className="flex-grow text-slate-500 mr-4" />
          <FormattedDate value={createdAt} />
        </motion.em>
      </div>

      {/* Main content */}
      <div className="w-11/12 max-w-768 shadow-lg border-1 border-slate-600 p-8 mb-16">
        {<BlockContent blockContent={mainContent} />}
      </div>
    </motion.div>
  );
};
