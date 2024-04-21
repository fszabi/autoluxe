"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "/public/assets/logo.png";
import logo_dark from "/public/assets/logo_dark.png";

// const navigation = [
//   { name: "Csomagjaink", href: "#csomagjaink" },
//   { name: "Főoldal", href: "/" },
// ];

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-7xl">
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
        {/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Menü megnyitása</span>
            <Bars3Icon
              className="h-6 w-6 text-neutral-900 dark:text-neutral-50"
              aria-hidden="true"
            />
          </button>
        </div> */}
        {/* <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </Link>
          ))}
        </div> */}
        <ThemeSwitcher />
      </nav>
      {/* <Transition appear show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden"
          onClose={() => setMobileMenuOpen(true)}
        >
          <div className="fixed inset-0 z-50" />

          <Transition.Child
            as={Fragment}
            enter="transition ease-out"
            enterFrom="transform opacity-0 translate-x-full"
            enterTo="transform opacity-100 translate-x-0"
            leave="transition ease-in"
            leaveFrom="transform opacity-100 translate-x-0"
            leaveTo="transform opacity-0 translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-50 dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-200 dark:sm:ring-neutral-800">
              <div className="flex items-center justify-between">
                <ThemeSwitcher onMobile />
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Menü bezárása</span>
                  <XMarkIcon
                    className="h-6 w-6 text-neutral-900 dark:text-neutral-50"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition> */}
    </header>
  );
};

export default Nav;
