import { Menu, Transition } from "@headlessui/react";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const themes = {
    system: "Alapértelmezett",
    dark: "Sötét",
    light: "Világos",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium bg-neutral-200 dark:bg-neutral-800">
          {theme === "system" ? (
            <ComputerDesktopIcon className="h-5 w-5" aria-hidden="true" />
          ) : theme === "dark" ? (
            <MoonIcon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <SunIcon className="h-5 w-5" aria-hidden="true" />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out"
        enterFrom="transform opacity-0 scale-75"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-75"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-neutral-50 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 focus:outline-none">
          <div className="px-1 py-1 space-y-2">
            {Object.entries(themes).map(([themeKey, themeStatus]) => (
              <Menu.Item key={themeKey}>
                {({ active }) => (
                  <button
                    onClick={() => setTheme(themeKey)}
                    className={classNames({
                      "group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors":
                        true,
                      "bg-neutral-200 dark:bg-neutral-800":
                        active && theme !== themeKey,
                      "text-neutral-50 bg-blue-900": theme === themeKey,
                    })}
                  >
                    {themeStatus}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default ThemeSwitcher;
