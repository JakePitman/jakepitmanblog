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
  "navbar.unknownPage": "Unknown Page",
};

const HOME_PAGE_MESSAGES = {
  "home.helloFriend": "Hello friend",
  "home.welcome": "I'm Jake. Welcome to my tech blog.",
  "home.objectiveOne": "Deepen my coding knowledge.",
  "home.objectiveTwo": "Share my learning with others.",
  "home.objectiveThree": "Practice communicating about code in Japanese.",
  "home.goToPortolio": "See my portfolio site",
};

const messages = {
  [LOCALES.ENGLISH]: {
    ...NAVBAR_MESSAGES,
    ...HOME_PAGE_MESSAGES,
  },
};

export default messages;
