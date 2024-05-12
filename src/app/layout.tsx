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
  metadataBase: new URL("https://autoluxe.hu/"),
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
    icon: "/assets/favicon/favicon.ico",
  },
  title: "AutoLuxe - Mobil autókozmetika",
  description:
    "Legyen szó autód külsejének mosásáról vagy belsejének tisztításáról ránk számíthatsz!",
  openGraph: {
    images: ["/assets/images/car.jpg"],
    title: "AutoLuxe - Mobil autókozmetika",
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
          <Script
            defer
            src="https://unpkg.com/@tinybirdco/flock.js"
            data-host="https://api.tinybird.co"
            data-token="p.eyJ1IjogIjA0ODI5ZGMwLTk4NGUtNGFiYi04YjYyLWQ1ZGMzOGZjYmY4MCIsICJpZCI6ICI1NWViN2UxMy1hZjZhLTRhNzgtOGNjOS1iM2ZhZWYxZmFhNjgiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.8M8aF3sEe1BK1VnArUUOkVd1WcVOLM535WzVpVJJ_cA"
            strategy="afterInteractive"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
