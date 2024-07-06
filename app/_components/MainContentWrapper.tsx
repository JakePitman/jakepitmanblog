"use client";
import React from "react";
import cx from "classnames";

import { useAnimationContext } from "@contexts/animationContext";
import styles from "./mainContentWrapper.module.css";

type MainContentWrapperProps = {
  children: React.ReactNode;
};
export const MainContentWrapper = ({ children }: MainContentWrapperProps) => {
  const { openingAnimationIsCompleted } = useAnimationContext();

  if (!openingAnimationIsCompleted) {
    return null;
  }
  return (
    <main className={cx("flex-grow overflow-scroll", styles.mainContainer)}>
      {children}
    </main>
  );
};
