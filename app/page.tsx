"use client"; // TODO: Find out why this needed
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import cx from "classnames";

type CardProps = {
  border: "left" | "right";
  children: React.ReactNode;
  classNames?: string;
};
const Card = ({ border, children, classNames }: CardProps) => (
  <div
    className={cx(
      "relative border-1 border-l-slate-900 bg-slate-400 h-max w-384 shadow-lg",
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
        <div className="flex items-start h-full pt-128 z-20">
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
        <div />
        <div className="flex flex-col justify-end h-full pb-128 z-20">
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
      </div>

      {/* Image */}
      <div className="w-4/6 aspect-square absolute top-0 right-0 bottom-0 left-0  m-auto max-h-[60vh]">
        <div className="relative w-full h-full">
          <Image
            src={"/images/washitsu.jpeg"}
            fill
            style={{ objectFit: "contain" }}
            alt={"Washitsu"}
          />
        </div>
      </div>
    </div>
  );
}
