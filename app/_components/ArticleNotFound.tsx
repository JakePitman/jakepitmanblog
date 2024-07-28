import cx from "classnames";
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const ArticleNotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative max-w-full bg-slate-900 overflow-hidden flex items-center shadow-lg">
        <h2
          className={cx(
            "text-slate-300 text-30 sm:text-72 tracking-widest p-12 pl-24 z-20 border-l-8 border-slate-300 m-16 text-shadow",
            bebasNeue.className
          )}
        >
          Article not found
        </h2>
        <h1 className="absolute right-12 -bottom-24 text-slate-800 font-bold text-[100px]">
          404
        </h1>
      </div>
    </div>
  );
};
