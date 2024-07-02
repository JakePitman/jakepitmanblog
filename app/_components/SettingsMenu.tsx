import cx from "classnames";

type OptionButtonProps = {
  label: string;
  isActive: boolean;
};
const OptionButton = ({ label, isActive }: OptionButtonProps) => {
  return (
    <button
      className={cx(
        "w-max px-8 py-4 border-solid border-2 border-transparent border-b-slate-900 mr-8 last:mr-0",
        {
          "text-slate-900": !isActive,
          "bg-slate-900 text-slate-300": isActive,
        }
      )}
    >
      {label}
    </button>
  );
};

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
        <OptionButton label="English" isActive={true} />
        <OptionButton label="日本語" isActive={false} />
      </div>
    </div>
  );
};
