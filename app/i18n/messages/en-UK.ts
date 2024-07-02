import { LOCALES } from "@contexts/userSettingsContext";

const NAVBAR_MESSAGES = {
  "navbar.home": "Home",
  "navbar.article": "Article",
  "navbar.articles": "Articles",
  "navbar.contact": "Contact",
  "navbar.menu": "Menu",
  "navbar.pages": "Pages",
  "navbar.settings": "Settings",
  "navbar.language": "Language",
  "navbar.english": "English",
  "navbar.japanese": "日本語",
};

const messages = {
  [LOCALES.ENGLISH]: {
    ...NAVBAR_MESSAGES,
  },
};

export default messages;
