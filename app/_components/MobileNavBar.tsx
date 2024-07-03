import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { FormattedMessage } from "react-intl";

import { fadeIn } from "@utils/sharedVariants";

const labelDataMap = {
  home: {
    messageId: "navbar.home",
    defaultMessage: "Home",
  },
  article: {
    messageId: "navbar.article",
    defaultMessage: "Article",
  },
  articles: {
    messageId: "navbar.articles",
    defaultMessage: "Articles",
  },
  contact: {
    messageId: "navbar.contact",
    defaultMessage: "Contact",
  },
  default: {
    messageId: "navbar.unknownPage",
    defaultMessage: "Unknown Page",
  },
};
type MobileNavBarProps = {
  currentPath: string;
  goToPath: (path: string) => void;
  toggleDropdown: () => void;
};
export const MobileNavBar = ({
  currentPath,
  goToPath,
  toggleDropdown,
}: MobileNavBarProps) => {
  let labelData;
  if (currentPath.startsWith("/articles/")) {
    labelData = labelDataMap.article;
  } else {
    switch (currentPath) {
      case "/":
        labelData = labelDataMap.home;
        break;
      case "/articles":
        labelData = labelDataMap.articles;
        break;
      case "/contact":
        labelData = labelDataMap.contact;
        break;
      default:
        labelData = labelDataMap.default;
    }
  }
  return (
    <div
      className="px-12 w-full flex justify-between items-center sm:hidden bg-slate-900"
      data-testid="mobile-nav-bar"
    >
      <motion.h1
        variants={fadeIn}
        className="text-36 tracking-widest text-shadow font-medium text-slate-300"
      >
        <FormattedMessage
          id={labelData.messageId}
          defaultMessage={labelData.defaultMessage}
        />
      </motion.h1>
      <motion.div variants={fadeIn}>
        <GiHamburgerMenu
          className="text-slate-300"
          size={36}
          onClick={toggleDropdown}
        />
      </motion.div>
    </div>
  );
};
