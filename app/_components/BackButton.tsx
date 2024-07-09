"use client";
import { BsBoxArrowLeft } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import Link from "next/link";

export const BackButton = () => (
  <Link
    href="/articles"
    className="sm:fixed sm:left-12 mt-8 flex items-center text-18 text-slate-900 z-20"
  >
    <BsBoxArrowLeft className="mr-8" />
    <FormattedMessage id="article.backButton" defaultMessage="Back" />
  </Link>
);
