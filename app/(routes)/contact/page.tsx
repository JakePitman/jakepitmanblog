"use client";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactPage() {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center items-center "
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="max-w-640 w-11/12">
        <motion.div variants={fadeInVariants} className="mb-48">
          <p className="text-center text-18">
            <FormattedMessage
              id="contactDataMainBody"
              defaultMessage="Thanks for checking out my blog!"
            />
          </p>
          <p className="text-center text-18">
            <FormattedMessage
              id="contactDataMainBody"
              defaultMessage="If you have any thoughts, I'd love to chat."
            />
          </p>
        </motion.div>
        <form action="https://formspree.io/f/xbjnnjaq" method="POST">
          <motion.label variants={fadeInVariants} className="block mb-12">
            <p className="mb-4">
              <FormattedMessage
                id="contactDataYourEmail"
                defaultMessage="Your email:"
              />
            </p>
            <input
              type="email"
              name="email"
              className="border-sky-700 border-2 rounded bg-sky-950 w-full"
            />
          </motion.label>
          <motion.label variants={fadeInVariants} className="block mb-12">
            <p className="mb-4">
              <FormattedMessage
                id="contactDataYourMessage"
                defaultMessage="Your message:"
              />
            </p>
            <textarea
              name="message"
              className="border-sky-700 border-2 rounded bg-sky-950 w-full h-384"
            ></textarea>
          </motion.label>
          <motion.div
            className="w-full flex justify-center"
            variants={fadeInVariants}
          >
            <button
              type="submit"
              className="border-2 rounded border-sky-500 px-16 py-8 hover:bg-transparent bg-sky-500 hover:text-sky-300 text-sky-950 transition-all"
            >
              <FormattedMessage id="contactDataSend" defaultMessage="Send" />
            </button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}
