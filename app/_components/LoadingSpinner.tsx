import styles from "./loadingSpinner.module.css";
import cx from "classnames";

type Props = {
  size?: number;
};
export const LoadingSpinner = ({ size = 50 }: Props) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div
        className={cx(
          "border-x-slate-900 border-y-transparent rounded-[50%]",
          styles.spinner
        )}
        style={{ height: size, width: size, borderWidth: size / 10 }}
      />
    </div>
  );
};
