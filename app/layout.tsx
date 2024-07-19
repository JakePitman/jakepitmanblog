import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cx from "classnames";

import "./globals.css";
import { Navbar } from "@components/Navbar";
import { AnimationContextProvider } from "@contexts/animationContext";
import { UserSettingsContextProvider } from "@contexts/userSettingsContext";
import I18nProvider from "@/app/i18n/Provider";
import { MainContentWrapper } from "@components/MainContentWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jake Pitman's Tech Blog",
  description:
    "Jake Pitman's Frontend blog is mostly about Typescript, React, NextJS, ThreeJS, React Three Fiber, and other frontend technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(inter.className, "bg-slate-300")}>
        <UserSettingsContextProvider>
          <AnimationContextProvider>
            <I18nProvider>
              <div className="w-screen h-[100dvh] flex flex-col">
                <Navbar />
                <MainContentWrapper>{children}</MainContentWrapper>
              </div>
            </I18nProvider>
          </AnimationContextProvider>
        </UserSettingsContextProvider>
      </body>
    </html>
  );
}
