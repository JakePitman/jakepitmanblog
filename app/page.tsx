import Image from "next/image";

export default function Home() {
  return (
    <div className="relative border-[1px] border-solid h-full ">
      <div className="w-3/5 aspect-square absolute top-0 right-0 bottom-0 left-0  m-auto">
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
