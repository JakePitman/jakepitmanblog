import cx from "classnames";

export const SettingsMenu = () => {
  return (
    <div className="flex sm:flex-col items-center sm:items-start">
      <h4
        className={cx(
          "text-slate-900 font-medium  w-full sm:mb-12 tracking-normal",
          "sm:text-slate-800 sm:border-b-[1px] sm:border-solid sm:border-slate-700 sm:tracking-wide"
        )}
      >
        Language
      </h4>
      <div className="flex">
        <button
          className={cx(
            "w-max px-8 py-4 border-solid border-2 border-transparent border-b-slate-900 mr-8 last:mr-0",
            // Inactive styles
            "text-slate-900"
          )}
        >
          English
        </button>
        <button
          className={cx(
            "w-max px-8 py-4 border-solid border-2 border-transparent last:mr-0",
            // Active styles
            "bg-slate-900 text-slate-300"
          )}
        >
          日本語
        </button>
      </div>
    </div>
  );
};
