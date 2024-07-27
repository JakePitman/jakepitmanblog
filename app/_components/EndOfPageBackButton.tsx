"use client";
import cx from "classnames";
import { BsBoxArrowLeft } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import Link from "next/link";

export const EndOfPageBackButton = () => (
  <motion.div
    className="flex w-full justify-center py-24"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.6 } }}
  >
    <Link
      href="/articles"
      className={cx("text-18 text-slate-900 flex items-center", "focus-styles")}
    >
      <BsBoxArrowLeft className="mr-8" />
      <FormattedMessage
        id="article.endOfPageBackButton"
        defaultMessage="Back to Articles"
      />
    </Link>
  </motion.div>
);
