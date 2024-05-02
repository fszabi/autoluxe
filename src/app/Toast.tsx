"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
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

  const lightThemeToastStyle = {
    fontWeight: 500,
    background: "#f5f5f4",
    color: "#171717",
  };

  const darkThemeToastStyle = {
    fontWeight: 500,
    background: "#262626",
    color: "#fafafa",
  };

  return (
    <Toaster
      reverseOrder={true}
      gutter={16}
      toastOptions={{
        duration: 5000,
        style:
          themeToUse === "light" ? lightThemeToastStyle : darkThemeToastStyle,
      }}
    />
  );
};

export default Toast;
