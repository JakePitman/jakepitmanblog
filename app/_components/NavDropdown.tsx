import cx from "classnames";
import { IoCloseSharp } from "react-icons/io5";

import { SettingsMenu } from "@components/SettingsMenu";

type SubheadingProps = {
  label: string;
  display?: "desktopOnly" | "mobileOnly" | undefined;
};
export const Subheading = ({ label, display }: SubheadingProps) => {
  return (
    <h3
      className={cx(
        "text-slate-800 font-medium text-14 w-full border-b-[1px] border-solid border-slate-700 tracking-wide mb-12",
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
    <button className="w-[30%] flex flex-col items-center" onClick={onClick}>
      <div className="w-full flex flex-col items-center relative mb-4">
        <div
          className={cx(
            "w-[70%] font-extrabold text-48 aspect-square border-solid border-2 border-transparent flex justify-center items-center overflow-hidden pb-4 ",
            {
              "text-slate-900 border-b-slate-900": !isActive,
              "bg-slate-900 text-slate-300": isActive,
            }
          )}
        >
          {symbol}
        </div>

        <div
          className={cx("h-full w-[3px] bg-slate-900 left-[7px]", {
            hidden: !isActive,
            absolute: isActive,
          })}
        />
        <div
          className={cx("h-full w-[3px] bg-slate-900 right-[7px]", {
            hidden: !isActive,
            absolute: isActive,
          })}
        />
      </div>
      <p className="border-solid border-slate-900 text-slate-900">{label}</p>
    </button>
  );
};

const MobileNavItemsData = [
  {
    label: "Home",
    symbol: "⏀",
    path: "/",
  },
  {
    label: "Articles",
    symbol: "⎅",
    path: "/articles",
  },
  {
    label: "Contact",
    symbol: "⏃",
    path: "/contact",
  },
];

type NavDropdownProps = {
  dismiss: () => void;
  pathname: string;
  goToPath: (path: string) => void;
};

export const NavDropdown = ({
  dismiss,
  pathname,
  goToPath,
}: NavDropdownProps) => {
  return (
    <div
      className={cx(
        // Base styles
        "border-solid border-[1px] h-min bg-slate-300 shadow-lg",
        // Desktop styles
        "sm:right-24 sm:left-auto sm:absolute sm:top-[-4px] sm:bottom-auto sm:w-min sm:min-w-384",
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
        {/* Mobile Nav */}
        <div className="sm:hidden mb-12">
          <Subheading label="Pages" />
          <div className="flex justify-around">
            {MobileNavItemsData.map(({ label, symbol, path }, i) => (
              <MobileNavItem
                key={path + i}
                label={label}
                symbol={symbol}
                isActive={pathname === path}
                onClick={() => {
                  goToPath(path);
                  dismiss();
                }}
              />
            ))}
          </div>
        </div>

        {/* Settings */}
        <Subheading label="Settings" display="mobileOnly" />
        <SettingsMenu />
      </div>
    </div>
  );
};
