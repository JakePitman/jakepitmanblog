import cx from "classnames";
import { IoCloseSharp } from "react-icons/io5";
import { FormattedMessage } from "react-intl";

import { SettingsMenu } from "@components/SettingsMenu";

type SubheadingProps = {
  labelMessageId: string;
  labelDefaultMessage: string;
  display?: "desktopOnly" | "mobileOnly" | undefined;
};
export const Subheading = ({
  labelMessageId,
  labelDefaultMessage,
  display,
}: SubheadingProps) => {
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
      <FormattedMessage
        id={labelMessageId}
        defaultMessage={labelDefaultMessage}
      />
    </h3>
  );
};

type MobileNavItemProps = {
  labelMessageId: string;
  labelDefaultMessage: string;
  onClick: () => void;
  symbol: string;
  isActive: boolean;
};

const MobileNavItem = ({
  labelMessageId,
  labelDefaultMessage,
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
      <p className="border-solid border-slate-900 text-slate-900">
        <FormattedMessage
          id={labelMessageId}
          defaultMessage={labelDefaultMessage}
        />
      </p>
    </button>
  );
};

const MobileNavItemsData = [
  {
    labelMessageId: "navbar.home",
    labelDefaultMessage: "Home",
    symbol: "⏀",
    path: "/",
  },
  {
    labelMessageId: "navbar.articles",
    labelDefaultMessage: "Articles",
    symbol: "⎅",
    path: "/articles",
  },
  {
    labelMessageId: "navbar.contact",
    labelDefaultMessage: "Contact",
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
    <div className="relative z-50" data-testid="navbar-dropdown">
      <div
        className="bg-slate-900/40 w-screen h-screen fixed top-0"
        onClick={dismiss}
        data-testid="dropdown-backdrop"
      />
      <div
        className={cx(
          // Base styles
          "h-min bg-slate-300 shadow-lg border-1 border-slate-900",
          // Desktop styles
          "sm:right-24 sm:left-auto sm:absolute sm:top-[-20px] sm:bottom-auto sm:w-min sm:min-w-384",
          // Mobile styles
          "left-0 right-0 top-0 bottom-0 m-auto fixed w-11/12"
        )}
      >
        <div className="bg-slate-900 p-8 flex justify-between items-center">
          <h2 className="text-20 text-slate-300 tracking-wide sm:block hidden">
            <FormattedMessage id="navbar.settings" defaultMessage="Settings" />
          </h2>
          <h2 className="text-20 text-slate-300 tracking-wide sm:hidden">
            <FormattedMessage id="navbar.menu" defaultMessage="Menu" />
          </h2>
          <button onClick={dismiss} data-testid="dropdown-dismiss-button">
            <IoCloseSharp className="text-slate-300 text-30 sm:text-24" />
          </button>
        </div>

        <div className="p-8">
          {/* Mobile Nav */}
          <div className="sm:hidden mb-32">
            <Subheading
              labelMessageId="navbar.pages"
              labelDefaultMessage="Pages"
            />
            <div className="flex justify-around">
              {MobileNavItemsData.map(
                ({ labelMessageId, labelDefaultMessage, symbol, path }, i) => (
                  <MobileNavItem
                    key={path + i}
                    labelMessageId={labelMessageId}
                    labelDefaultMessage={labelDefaultMessage}
                    symbol={symbol}
                    isActive={pathname === path}
                    onClick={() => {
                      goToPath(path);
                      dismiss();
                    }}
                  />
                )
              )}
            </div>
          </div>

          {/* Settings */}
          <Subheading
            labelMessageId="navbar.settings"
            labelDefaultMessage="Settings"
            display="mobileOnly"
          />
          <SettingsMenu />
        </div>
      </div>
    </div>
  );
};
