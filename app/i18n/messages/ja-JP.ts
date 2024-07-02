import { LOCALES } from "@contexts/userSettingsContext";

const NAVBAR_MESSAGES = {
  "navbar.home": "ホーム",
  "navbar.article": "記事",
  "navbar.articles": "記事",
  "navbar.contact": "連絡",
};

const messages = {
  [LOCALES.JAPANESE]: {
    ...NAVBAR_MESSAGES,
  },
};

export default messages;
