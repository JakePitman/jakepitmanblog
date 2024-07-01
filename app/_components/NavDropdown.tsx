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
    <button className="w-[30%] flex flex-col items-center" onClick={onClick}>
      <p
        className={cx(
          "w-[70%] font-extrabold text-48 aspect-square border-solid border-2 border-transparent flex justify-center items-center overflow-hidden pb-4 mb-4",
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
          <div className="flex justify-around mt-12">
            <MobileNavItem
              label="Home"
              symbol="⏀"
              isActive={pathname === "/"}
              onClick={() => {
                goToPath("/");
                dismiss();
              }}
            />
            <MobileNavItem
              label="Articles"
              symbol="⎅"
              isActive={pathname === "/articles"}
              onClick={() => {
                goToPath("/articles");
                dismiss();
              }}
            />
            <MobileNavItem
              label="Contact"
              symbol="⏃"
              isActive={pathname === "/contact"}
              onClick={() => {
                goToPath("/contact");
                dismiss();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
