"use client";
import { FormattedDate as ReactIntlFormattedDate } from "react-intl";

type FormattedDateProps = {
  value: string;
};
export const FormattedDate = ({ value }: FormattedDateProps) => {
  return <ReactIntlFormattedDate value={value} />;
};
