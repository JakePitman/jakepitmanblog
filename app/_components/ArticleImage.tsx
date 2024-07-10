"use client";
import { useState } from "react";
import Image from "next/image";
import cx from "classnames";

import { urlFor } from "@/sanity/client";

type ArticleImageProps = {
  src: string;
  alt: string;
};
export const ArticleImage = ({ src, alt }: ArticleImageProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <>
      <div className="relative w-full h-256 sm:h-512 bg-slate-400">
        <Image
          src={urlFor(src).url()}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          onClick={() => setIsFullScreen(true)}
        />
      </div>

      {isFullScreen && (
        <div
          className="fixed w-screen h-screen bg-black/70 top-0 left-0 z-50 flex justify-center items-center"
          onClick={() => setIsFullScreen(false)}
        >
          <div className="relative w-[95%] h-[95%]">
            <Image
              src={urlFor(src).url()}
              alt={alt}
              fill
              style={{ objectFit: "contain" }}
              onClick={() => setIsFullScreen(true)}
            />
          </div>
        </div>
      )}
    </>
  );
};
