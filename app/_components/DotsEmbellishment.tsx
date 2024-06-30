import { motion } from "framer-motion";
import { useWindowDimensions } from "@hooks/useWindowDimensions";

import { fadeIn } from "@utils/sharedVariants";

const DotGroup = () => (
  <motion.div variants={fadeIn} className="relative mx-12 h-12">
    <div className="absolute right-[-7px] w-[3px] h-[3px] bg-slate-900" />
    <div className="absolute right-[1px] w-[3px] h-[3px] bg-slate-900" />
    <div className="absolute top-[5px] w-[3px] h-[3px] bg-slate-900" />
  </motion.div>
);

const DotsEmbellishment = () => {
  const { width } = useWindowDimensions();
  const numberOfDotGroups = width / 20;
  const staggerDuration = 0.025;

  return (
    <div className="flex justify-center mt-4 w-full overflow-x-hidden">
      <div className="flex">
        <motion.div
          variants={{
            itemsAppearing: {
              transition: {
                staggerChildren: staggerDuration,
                staggerDirection: -1,
              },
            },
          }}
          className="flex"
        >
          {Array.from({ length: numberOfDotGroups / 2 }).map((_, i) => (
            <DotGroup key={i} />
          ))}
        </motion.div>
        <DotGroup />
        <motion.div
          className="flex"
          variants={{
            itemsAppearing: {
              transition: {
                staggerChildren: staggerDuration,
                staggerDirection: 1,
              },
            },
          }}
        >
          {Array.from({ length: numberOfDotGroups / 2 }).map((_, i) => (
            <DotGroup key={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DotsEmbellishment;
