"use client";
import { Bebas_Neue } from "next/font/google";
import cx from "classnames";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

import { FormattedDate } from "@components/FormattedDate";
import { PortableTextConverter } from "@components/PortableTextConverter";
import { PortableTextItem } from "@customTypes/PortableTextTypes";
import { Tag } from "@components/Tag";
import { useEffect, useState, useMemo } from "react";

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
  mainContent: PortableTextItem[];
  jpMainContent: PortableTextItem[];
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
  const intl = useIntl();
  const { locale } = intl;

  const enContent = useMemo(
    () => ({
      title,
      description,
      tags,
      mainContent,
    }),
    [title, description, tags, mainContent]
  );
  const jpContent = useMemo(
    () => ({
      title: jpTitle,
      description: jpDescription,
      tags: jpTags,
      mainContent: jpMainContent,
    }),
    [jpTitle, jpDescription, jpTags, jpMainContent]
  );
  const [content, setContent] = useState(enContent);
  useEffect(() => {
    switch (locale) {
      case "en-uk":
        setContent(enContent);
        break;
      case "ja-jp":
        setContent(jpContent);
        break;
      default:
        setContent(enContent);
    }
  }, [locale, enContent, jpContent]);

  return (
    <motion.div
      initial="hidden"
      animate="showContent"
      variants={containerVariants}
      className="w-full flex flex-col items-center mt-12 relative"
      transition={{ staggerChildren: 0.04 }}
    >
      <div className="w-full shadow-lg border-1 border-slate-600 p-8 sm:p-16 mb-16">
        <h1 className={cx("text-24 mb-8", bebasNeue.className)}>
          {content.title}
        </h1>

        <h3 className="border-l-8 border-slate-800 pl-8 mb-12">
          {content.description}
        </h3>

        <div className="flex flex-wrap mb-8">
          {content.tags.map(({ value }, i) => (
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
        {<PortableTextConverter portableText={content.mainContent} />}
      </div>
    </motion.div>
  );
};
