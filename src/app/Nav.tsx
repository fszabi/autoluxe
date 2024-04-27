"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "/public/assets/logo/logo.png";
import logo_dark from "/public/assets/logo/logo_dark.png";

const Nav = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const systemTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const themeToUse = theme === "system" ? systemTheme : theme;

  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8 gap-10"
      aria-label="Navigáció"
    >
      <div className="flex">
        {themeToUse === "light" ? (
          <Image
            className="h-14 w-auto"
            src={logo}
            alt="gosi és kertész services logo"
          />
        ) : (
          <Image
            className="h-14 w-auto"
            src={logo_dark}
            alt="gosi és kertész services logo 2"
          />
        )}
      </div>
      <ThemeSwitcher />
    </nav>
  );
};

export default Nav;
