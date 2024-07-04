"use client"; // TODO: Find out why this needed
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import cx from "classnames";
import { MdOpenInNew } from "react-icons/md";

type CardProps = {
  border: "left" | "right";
  children: React.ReactNode;
  classNames?: string;
};
const Card = ({ border, children, classNames }: CardProps) => (
  <div
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
  </div>
);

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="flex justify-around h-full">
        <div className="flex items-start h-full sm:pt-128 pt-[5vh] z-20">
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
        </div>
        <div className="hidden sm:block" />
        <div className="hidden sm:flex flex-col justify-end h-full pb-128 z-20">
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
        </div>
        <div className="fixed bottom-0 h-[10vh] flex items-center z-30">
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
        </div>
      </div>

      <div className="absolute top-[10vh] bottom-[10vh] w-full sm:w-4/5 sm:left-0 sm:right-0 sm:mx-auto">
        <Image
          src={"/images/washitsu.jpeg"}
          fill
          style={{ objectFit: "cover" }}
          alt={"Washitsu"}
        />
      </div>
    </div>
  );
}
