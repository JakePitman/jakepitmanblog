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

const ARTICLES_PAGE_MESSAGES = {
  "articles.go": "Go",
};

const ARTICLE_PAGE_MESSAGES = {
  "article.backButton": "Back",
};

const CONTACT_PAGE_MESSAGES = {
  "contact.mainBody1": "Thanks for checking out my blog!",
  "contact.mainBody2": "If you have any thoughts, I'd love to chat.",
  "contact.yourEmail": "Your email:",
  "contact.yourMessage": "Your message:",
  "contact.send": "Send",
};

const messages = {
  [LOCALES.ENGLISH]: {
    ...NAVBAR_MESSAGES,
    ...HOME_PAGE_MESSAGES,
    ...ARTICLES_PAGE_MESSAGES,
    ...ARTICLE_PAGE_MESSAGES,
    ...CONTACT_PAGE_MESSAGES,
  },
};

export default messages;
