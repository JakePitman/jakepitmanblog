import cx from "classnames";

import styles from "./tag.module.css";

type TagProps = {
  label: string;
};

export const Tag = ({ label }: TagProps) => (
  <p
    className={cx(
      "text-14 py-4 px-8 mr-8 last:mr-0 my-4 bg-slate-500 text-slate-900",
      styles.tag
    )}
  >
    {label}
  </p>
);
