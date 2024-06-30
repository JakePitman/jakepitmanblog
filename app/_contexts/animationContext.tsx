"use client";

import { createContext, useContext, useState } from "react";

type AnimationContext = {
  openingAnimationIsCompleted: boolean;
  setOpeningAnimationIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};

const AnimationContext = createContext<AnimationContext | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AnimationContextProvider = ({ children }: Props) => {
  const [openingAnimationIsCompleted, setOpeningAnimationIsCompleted] =
    useState<boolean>(false);

  return (
    <AnimationContext.Provider
      value={{ openingAnimationIsCompleted, setOpeningAnimationIsCompleted }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationContext must be used within an AnimationContextProvider"
    );
  }
  return context;
};
