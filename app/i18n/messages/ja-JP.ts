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
  "navbar.unknownPage": "ページ不明",
};

const HOME_PAGE_MESSAGES = {
  "home.helloFriend": "こんにちは",
  "home.welcome": "私はジェイクです。私のブログえようこそ。",
  "home.objectiveOne": "プログラミングの知識を深める。",
  "home.objectiveTwo": "習った知識をみんなにシェアする。",
  "home.objectiveThree": "日本語でプログラミングについての話し合いを練習する。",
  "home.goToPortfolio": "私のポートフォリオサイトはこっちです",
};

const ARTICLES_PAGE_MESSAGES = {
  "articles.go": "読む",
};

const ARTICLE_PAGE_MESSAGES = {
  "article.backButton": "帰る",
};

const messages = {
  [LOCALES.JAPANESE]: {
    ...NAVBAR_MESSAGES,
    ...HOME_PAGE_MESSAGES,
    ...ARTICLES_PAGE_MESSAGES,
    ...ARTICLE_PAGE_MESSAGES,
  },
};

export default messages;
