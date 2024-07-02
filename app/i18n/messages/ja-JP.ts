import { LOCALES } from "@contexts/userSettingsContext";

const NAVBAR_MESSAGES = {
  "navbar.home": "ホーム",
  "navbar.article": "記事",
  "navbar.articles": "記事",
  "navbar.contact": "連絡",
  "navbar.menu": "メニュー",
  "navbar.pages": "ページ",
  "navbar.settings": "設定",
  "navbar.language": "言語",
  "navbar.english": "English",
  "navbar.japanese": "日本語",
};

const messages = {
  [LOCALES.JAPANESE]: {
    ...NAVBAR_MESSAGES,
  },
};

export default messages;
