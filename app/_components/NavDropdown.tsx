import cx from "classnames";
import { IoCloseSharp } from "react-icons/io5";

type SubheadingProps = {
  label: string;
  display?: "desktopOnly" | "mobileOnly" | undefined;
};
const Subheading = ({ label, display }: SubheadingProps) => {
  return (
    <h3
      className={cx(
        "text-slate-800 font-medium text-14 w-full border-b-[1px] border-solid border-slate-700 tracking-wide",
        {
          "sm:hidden": display === "mobileOnly",
          "sm:block hidden": display === "desktopOnly",
        }
      )}
    >
      {label}
    </h3>
  );
};

type MobileNavItemProps = {
  label: string;
  onClick: () => void;
  symbol: string;
  isActive: boolean;
};

const MobileNavItem = ({
  label,
  onClick,
  symbol,
  isActive,
}: MobileNavItemProps) => {
  return (
    <button className="w-[30%]">
      <p
        className={cx(
          "font-extrabold text-48 aspect-square border-solid border-2 border-transparent flex justify-center items-center",
          {
            "text-slate-900 border-b-slate-900": !isActive,
            "bg-slate-900 text-slate-300": isActive,
          }
        )}
      >
        {symbol}
      </p>
      <p className="border-solid border-slate-900 text-slate-900">{label}</p>
    </button>
  );
};

type NavDropdownProps = {
  dismiss: () => void;
  pathname: string;
};

export const NavDropdown = ({ dismiss, pathname }: NavDropdownProps) => {
  return (
    <div
      className={cx(
        // Base styles
        "border-solid border-[1px] h-min bg-slate-300 shadow-lg",
        // Desktop styles
        "sm:right-24 sm:left-auto sm:absolute sm:top-[-4px] sm:bottom-auto sm:w-min",
        // Mobile styles
        "left-0 right-0 top-0 bottom-0 m-auto fixed w-11/12"
      )}
    >
      <div className="bg-slate-900 p-8 flex justify-between items-center">
        <h2 className="text-20 text-slate-300 tracking-wide sm:block hidden">
          Settings
        </h2>
        <h2 className="text-20 text-slate-300 tracking-wide sm:hidden">Menu</h2>
        <button onClick={dismiss}>
          <IoCloseSharp className="text-slate-300 text-30 sm:text-24" />
        </button>
      </div>

      <div className="p-8">
        <div className="sm:hidden">
          <Subheading label="Pages" />
          <div className="flex justify-around mt-8">
            <MobileNavItem
              label="Home"
              onClick={() => {}}
              symbol="⏀"
              isActive={pathname === "/"}
            />
            <MobileNavItem
              label="Articles"
              onClick={() => {}}
              symbol="⎅"
              isActive={pathname === "/articles"}
            />
            <MobileNavItem
              label="Contact"
              onClick={() => {}}
              symbol="⏃"
              isActive={pathname === "/contact"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
