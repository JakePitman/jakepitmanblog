"use client";
import { BsBoxArrowLeft } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import Link from "next/link";

export const BackButton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.6 } }}
  >
    <Link
      href="/articles"
      className="lg:fixed lg:left-12 mt-8 flex items-center text-18 text-slate-900 z-20"
    >
      <BsBoxArrowLeft className="mr-8" />
      <FormattedMessage id="article.backButton" defaultMessage="Back" />
    </Link>
  </motion.div>
);
