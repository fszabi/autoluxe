import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: [],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--font-montserrat)",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  darkMode: "class",
};
export default config;
