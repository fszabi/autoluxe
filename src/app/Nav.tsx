"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "/public/assets/logo/logo.webp";
import logo_dark from "/public/assets/logo/logo_dark.webp";

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
      <div>
        {themeToUse === "light" ? (
          <Image className="h-10 w-auto" src={logo} alt="autoluxe logo" />
        ) : (
          <Image
            className="h-10 w-auto"
            src={logo_dark}
            alt="autoluxe logo dark"
          />
        )}
      </div>
      <ThemeSwitcher />
    </nav>
  );
};

export default Nav;
