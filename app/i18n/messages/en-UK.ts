import { LOCALES } from "@contexts/userSettingsContext";

const NAVBAR_MESSAGES = {
  "navbar.home": "Home",
  "navbar.article": "Article",
  "navbar.articles": "Articles",
  "navbar.contact": "Contact",
};

const messages = {
  [LOCALES.ENGLISH]: {
    ...NAVBAR_MESSAGES,
  },
};

export default messages;
