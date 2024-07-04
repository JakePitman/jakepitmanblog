import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  itemsAppearing: { opacity: 1 },
};

type HomeImageProps = {
  imageIsLoaded: boolean;
  setImageIsLoaded: (value: boolean) => void;
};
export const HomeImage = ({
  imageIsLoaded,
  setImageIsLoaded,
}: HomeImageProps) => {
  return (
    <div className="absolute top-[10vh] bottom-[10vh] w-full sm:w-4/5 sm:left-0 sm:right-0 sm:mx-auto">
      {!imageIsLoaded && (
        <div className="w-full h-full flex jutify-center items-center">
          <p className="z-50 text-slate-700  w-full text-center">Loading</p>
        </div>
      )}
      <motion.div variants={variants}>
        <Image
          src={"/images/washitsu.jpeg"}
          fill
          style={{ objectFit: "cover" }}
          alt={"Washitsu"}
          onLoad={(e) => {
            setImageIsLoaded(true);
          }}
        />
      </motion.div>
    </div>
  );
};
