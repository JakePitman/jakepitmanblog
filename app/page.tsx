import Image from "next/image";
import { useIntl } from "react-intl";
import cx from "classnames";

type CardProps = {
  border: "left" | "right";
  children: React.ReactNode;
};
const Card = ({ border, children }: CardProps) => (
  <div className={cx("relative bg-slate-400 h-max w-max shadow-lg")}>
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
            <p>Hello world</p>
          </Card>
        </div>
        <div />
        <div className="flex items-end h-full pb-128 z-20">
          <Card border="right">
            <p>Hello world</p>
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
