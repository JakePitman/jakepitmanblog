import Image from "next/image";
import { useIntl } from "react-intl";
import cx from "classnames";

type CardProps = {
  border: "left" | "right";
  children: React.ReactNode;
};
const Card = ({ border, children }: CardProps) => (
  <div className={cx("relative bg-slate-400")}>
    <div
      className={cx("absolute w-4 h-full bg-slate-900", {
        "right-0": border === "right",
      })}
    />
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="relative h-full ">
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
