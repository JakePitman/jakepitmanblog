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

type NavDropdownProps = {
  dismiss: () => void;
};

export const NavDropdown = ({ dismiss }: NavDropdownProps) => {
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
        <Subheading label="Pages" display="mobileOnly" />
      </div>
    </div>
  );
};
