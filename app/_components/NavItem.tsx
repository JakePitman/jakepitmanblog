import cx from "classnames";
import { motion } from "framer-motion";

type NavItemProps = {
  label: string;
  onClick: () => void;
  isActive: boolean;
  symbol: string;
};

const NavItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const NavItem = ({ label, onClick, isActive, symbol }: NavItemProps) => {
  return (
    <motion.button
      variants={NavItemVariants}
      className={cx("px-8 py-8 mr-12 h-min font-medium", {
        "bg-slate-500 mb-8": !isActive,
        "bg-slate-900 mt-8": isActive,
      })}
      onClick={onClick}
    >
      <div>
        <span
          className={cx("mr-8 aspect-square w-24 inline-block", {
            "bg-slate-900 text-slate-300": !isActive,
            "bg-slate-300 text-slate-900": isActive,
          })}
        >
          {symbol}
        </span>
        <p
          className={cx("inline-block tracking-wide", {
            "text-slate-900": !isActive,
            "text-slate-300": isActive,
          })}
        >
          {label}
        </p>
      </div>
    </motion.button>
  );
};
