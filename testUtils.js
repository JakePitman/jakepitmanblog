// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./app/_contexts/userSettingsContext";
import { UserSettingsContextProvider } from "./app/_contexts/userSettingsContext";
import messages from "./app/i18n/messages";

function render(ui, { locale = LOCALES.ENGLISH, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <UserSettingsContextProvider>
        <IntlProvider
          textComponent={React.Fragment}
          locale={locale}
          messages={messages[locale]}
        >
          {children}
        </IntlProvider>
      </UserSettingsContextProvider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
