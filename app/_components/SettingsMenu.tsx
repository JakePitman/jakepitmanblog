"use client";
import cx from "classnames";

import { useUserSettingsContext, LOCALES } from "@contexts/userSettingsContext";

type OptionButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};
const OptionButton = ({ label, isActive, onClick }: OptionButtonProps) => {
  return (
    <button
      onClick={onClick}
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
  const { userSettings, dispatch } = useUserSettingsContext();
  const { locale } = userSettings;

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
        <OptionButton
          label="English"
          isActive={locale === LOCALES.ENGLISH}
          onClick={() =>
            dispatch({ type: "SET_LOCALE", locale: LOCALES.ENGLISH })
          }
        />
        <OptionButton
          label="日本語"
          isActive={locale === LOCALES.JAPANESE}
          onClick={() =>
            dispatch({ type: "SET_LOCALE", locale: LOCALES.JAPANESE })
          }
        />
      </div>
    </div>
  );
};
