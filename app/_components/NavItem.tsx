import cx from "classnames";

type NavItemProps = {
  label: string;
  onClick: () => void;
  isActive: boolean;
  symbol: string;
};

export const NavItem = ({ label, onClick, isActive, symbol }: NavItemProps) => {
  return (
    <li
      className={cx("px-8 py-8 mr-12 h-min font-medium", {
        "bg-slate-500": !isActive,
        "bg-slate-900 mt-8": isActive,
      })}
    >
      <button onClick={onClick}>
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
      </button>
    </li>
  );
};
