import Image from "next/image";

export default function Home() {
  return (
    <div className="border-[1px] border-solid h-full">
      <div className="relative w-128 h-128">
        <Image
          src={"/images/washitsu.jpeg"}
          fill
          style={{ objectFit: "contain" }}
          alt={"Washitsu"}
        />
      </div>
    </div>
  );
}
