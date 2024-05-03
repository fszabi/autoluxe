import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "animate.css";
import Script from "next/script";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gosi-kertesz.hu/"),
  keywords: [
    "házhoz jön autómosó",
    "autómosás",
    "autóápolás",
    "autó tisztítás",
    "autó tisztítás szolgáltatás",
    "autó tisztítás specialisták",
    "autó tisztítás professzionális módon",
    "autó kárpit tisztítás",
    "kocsimosás",
    "autókozmetika szolgáltatások",
    "kocsimosás közelben",
    "autó kozmetika árak",
    "győr autómosás",
    "mosonmagyaróvár autómosás",
  ],
  icons: {
    icon: "/assets/favicon/favicon.webp",
  },
  title: "Gösi & Kertész Services",
  description:
    "Legyen szó autód külsejének mosásáról vagy belsejének tisztításáról ránk számíthatsz!",
  openGraph: {
    images: "/assets/images/car.jpg",
    title: "Gösi & Kertész Services",
    description:
      "Legyen szó autód külsejének mosásáról vagy belsejének tisztításáról ránk számíthatsz!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-montserrat bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50`}
      >
        <ThemeProvider defaultTheme="system" attribute="class">
          {children}
        </ThemeProvider>
        <Script
          defer
          src="https://eu.umami.is/script.js"
          data-website-id="0af0b7bb-b796-4564-8dd6-99d49831ae38"
        />
      </body>
    </html>
  );
}
