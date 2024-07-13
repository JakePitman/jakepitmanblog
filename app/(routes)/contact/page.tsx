"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import cx from "classnames";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    top: -20,
  },
  show: {
    opacity: 1,
    top: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = email.length > 0 && message.length > 0;

  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center items-center"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="max-w-640 w-11/12 relative">
        <motion.div
          variants={fadeInVariants}
          className="mb-48 border-1 border-slate-900 shadow-lg p-12 relative text-slate-900 font-medium"
        >
          <p className="text-center text-18">
            <FormattedMessage
              id="contact.mainBody1"
              defaultMessage="Thanks for checking out my blog!"
            />
          </p>
          <p className="text-center text-18">
            <FormattedMessage
              id="contact.mainBody2"
              defaultMessage="If you have any thoughts, I'd love to chat."
            />
          </p>
        </motion.div>
        <motion.form
          action="https://formspree.io/f/xyzgzwyd"
          className="border-1 border-slate-900 p-12 shadow-lg relative"
          variants={fadeInVariants}
          method="POST"
        >
          <label className="block mb-12 text-slate-900 font-medium">
            <p className="mb-4">
              <FormattedMessage
                id="contact.yourEmail"
                defaultMessage="Your email:"
              />
            </p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cx(
                "border-slate-700 border-2 bg-slate-400 p-8 w-full",
                "focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              )}
            />
          </label>
          <label className="block mb-12 text-slate-900 font-medium">
            <p className="mb-4">
              <FormattedMessage
                id="contact.yourMessage"
                defaultMessage="Your message:"
              />
            </p>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={cx(
                "border-slate-700 border-2 bg-slate-400 p-8 w-full h-384",
                "focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              )}
            ></textarea>
          </label>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid}
              className={cx(
                "border-2 px-16 py-8",
                "focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent",
                {
                  "text-slate-700 border-slate-700 bg-slate-400": !isFormValid,
                  "bg-slate-900 text-slate-300": isFormValid,
                }
              )}
            >
              <FormattedMessage id="contact.send" defaultMessage="Send" />
            </button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
}
