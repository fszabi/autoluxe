"use client";

import { Switch } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

const SwitchComponent = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <Switch.Group as="div" className="flex flex-wrap gap-4 sm:col-span-2">
      <div className="flex h-6 items-center">
        <Switch
          checked={agreed}
          onChange={setAgreed}
          className={classNames({
            "bg-blue-500": agreed,
            "bg-neutral-200 dark:bg-neutral-800": !agreed,
            "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-neutral-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600":
              true,
          })}
        >
          <span className="sr-only">Adatvédelmi nyilatkozat elfogadása</span>
          <span
            aria-hidden="true"
            className={classNames({
              "translate-x-3.5": agreed,
              "translate-x-0": !agreed,
              "h-4 w-4 transform rounded-full bg-neutral-50 shadow-sm ring-1 ring-neutral-900/5 transition duration-200 ease-in-out":
                true,
            })}
          />
        </Switch>
      </div>
      <Switch.Label className="text-sm leading-6 text-neutral-600 dark:text-neutral-200">
        Elfogadom az{" "}
        <Link href="#" className="font-semibold text-blue-500">
          adatvédelmi&nbsp;nyilatkozatot
        </Link>
        .
      </Switch.Label>
    </Switch.Group>
  );
};

export default SwitchComponent;
