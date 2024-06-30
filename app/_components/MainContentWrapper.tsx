"use client";
import React from "react";

import { useAnimationContext } from "@contexts/animationContext";

type MainContentWrapperProps = {
  children: React.ReactNode;
};
export const MainContentWrapper = ({ children }: MainContentWrapperProps) => {
  const { openingAnimationIsCompleted } = useAnimationContext();

  if (!openingAnimationIsCompleted) {
    return null;
  }
  return children;
};
