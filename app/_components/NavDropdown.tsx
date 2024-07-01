import cx from "classnames";
export const NavDropdown = () => {
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
      <div className="bg-slate-900 p-8">
        <h2 className="text-slate-300 sm:block hidden">Settings</h2>
        <h2 className="text-slate-300 sm:hidden">Menu</h2>
      </div>
      My cool dropdown
    </div>
  );
};
