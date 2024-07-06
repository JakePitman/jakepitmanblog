"use client";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import cx from "classnames";
import { MdOpenInNew } from "react-icons/md";
import { HomeImage } from "@components/HomeImage";
import { motion, useAnimation } from "framer-motion";

const cardVariants = (slideFrom: "left" | "right") => ({
  hidden: { opacity: 0, left: slideFrom === "left" ? -20 : 20 },
  cardsAppearing: { opacity: 1, left: 0, transition: { stagger: 0.2 } },
});
const portfolioLinkVariants = {
  hidden: { opacity: 0 },
  portfolioLinkAppearing: { opacity: 1 },
};
type CardProps = {
  border: "left" | "right";
  children: React.ReactNode;
  classNames?: string;
};
const Card = ({ border, children, classNames }: CardProps) => (
  <motion.div
    variants={cardVariants(border === "left" ? "left" : "right")}
    className={cx(
      "relative border-1 border-l-slate-900 bg-slate-400 h-max w-384 max-w-[90vw] shadow-lg",
      classNames
    )}
  >
    <div
      className={cx("absolute w-8 h-full bg-slate-900", {
        "right-0": border === "right",
      })}
    />

    <div
      className={cx("py-8", {
        "pr-16 pl-12": border === "right",
        "pr-12 pl-16": border === "left",
      })}
    >
      {children}
    </div>
  </motion.div>
);

export default function Home() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("imageAppearing");
      await controls.start("cardsAppearing");
      await controls.start("portfolioLinkAppearing");
    };
    if (imageIsLoaded) {
      sequence();
    }
  }, [imageIsLoaded, controls]);

  return (
    <motion.div
      className="relative h-full"
      animate={controls}
      initial="hidden"
      variants={{ cardsAppearing: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="flex justify-around h-full">
        <motion.div className="flex items-start h-full sm:pt-128 pt-[5dvh] z-20">
          <Card border="left">
            <h3 className="font-medium tracking-wide text-24">
              <FormattedMessage
                id="home.helloFriend"
                defaultMessage="Hello friend"
              />
            </h3>
            <p>
              <FormattedMessage
                id="home.welcome"
                defaultMessage="I'm Jake. Welcome to my tech blog."
              />
            </p>
          </Card>
        </motion.div>
        <div className="hidden sm:block" />
        <motion.div className="hidden sm:flex flex-col justify-start h-full pt-128 z-20">
          <Card border="right">
            <div className="flex">
              <b className="mr-8">1.</b>
              <p>
                <FormattedMessage
                  id="home.objectiveOne"
                  defaultMessage="Deepen my coding knowledge."
                />
              </p>
            </div>
          </Card>
          <Card border="right" classNames="mt-8">
            <div className="flex">
              <b className="mr-8">2.</b>
              <p>
                <FormattedMessage
                  id="home.objectiveTwo"
                  defaultMessage="Share my learning with others."
                />
              </p>
            </div>
          </Card>
          <Card border="right" classNames="mt-8">
            <div className="flex">
              <b className="mr-8">3.</b>
              <p>
                <FormattedMessage
                  id="home.objectiveThree"
                  defaultMessage="Practice communicating about code in Japanese."
                />
              </p>
            </div>
          </Card>
        </motion.div>
        <motion.div
          className="absolute bottom-0 h-[10dvh] flex items-center z-30"
          variants={portfolioLinkVariants}
        >
          <a
            href="https://jakepitman.com"
            target="_blank"
            className=" underline underline-offset-2 relative"
          >
            <FormattedMessage
              id="home.goToPortfolio"
              defaultMessage="See my portfolio site"
            />
            <MdOpenInNew className="absolute top-[-8px] right-[-15px] text-slate-800" />
          </a>
        </motion.div>
      </div>
      <HomeImage
        imageIsLoaded={imageIsLoaded}
        setImageIsLoaded={setImageIsLoaded}
      />
    </motion.div>
  );
}
