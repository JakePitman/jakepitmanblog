import Image from "next/image";
import { urlFor } from "@/sanity/client";

type ArticleImageProps = {
  src: string;
  alt: string;
};
export const ArticleImage = ({ src, alt }: ArticleImageProps) => {
  return (
    <div className="relative w-full h-256 sm:h-512 bg-slate-400">
      <Image
        src={urlFor(src).url()}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};
