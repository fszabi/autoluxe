"use client";

import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { Fragment, useState } from "react";
import tiers from "../utils/tiers";
import PricingForm from "./PricingForm";

type Pkg = {
  name: string;
  tier: string;
  key: string;
  services: string[];
  price: number;
};

const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pkgName, setPkgName] = useState("");
  const [tierName, setTierName] = useState("");
  const [pkgServices, setPkgServices] = useState<string[]>([]);
  const [pkgPrice, setPkgPrice] = useState(0);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleOpen = (pkg: Pkg, tierName: string) => {
    setTierName(tierName);
    setPkgName(pkg.name);
    setPkgPrice(pkg.price);
    setPkgServices(pkg.services);
    openModal();
  };

  return (
    <div id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
        <div className="mx-auto lg:max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">
            Csomagjaink
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Mit nyújtunk?
          </p>
        </div>
        <div className="space-y-20">
          {tiers.map((tier) => (
            <div key={tier.name} className="space-y-10">
              <h3 className="text-2xl font-semibold sm:text-center">
                {tier.name}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {tier.packages.map((pkg, pkgIndex) => (
                  <div
                    key={pkg.key}
                    className={classNames({
                      "p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-5 hover:scale-[1.05] transition-transform duration-300":
                        true,
                      "bg-gray-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900":
                        pkgIndex === 2,
                    })}
                  >
                    <h4 className="font-semibold">{pkg.name}</h4>
                    <p className="text-3xl sm:text-4xl font-bold">
                      {pkg.price.toLocaleString("de-DE")} Ft
                    </p>
                    <button
                      onClick={() => {
                        handleOpen(pkg, tier.name);
                      }}
                      className={classNames({
                        "bg-blue-500 hover:bg-blue-400 transition-colors text-neutral-50 py-2 px-4 rounded-md font-semibold text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600":
                          true,
                        "bg-white/10 hover:bg-white/20 dark:bg-neutral-600 dark:hover:bg-neutral-500 focus-visible:outline-neutral-400 dark:focus-visible:outline-neutral-700":
                          pkgIndex === 2,
                      })}
                    >
                      Ezt választom
                    </button>
                    <ul className="space-y-4">
                      {pkg.services.map((service, index) => (
                        <div
                          className="grid grid-cols-[auto,_1fr] gap-3 items-center"
                          key={index}
                        >
                          <CheckIcon
                            className={classNames({
                              "h-5 w-5 text-blue-500": true,
                              "text-neutral-200 dark:text-neutral-600":
                                pkgIndex === 2,
                            })}
                          />
                          <li
                            className={classNames({
                              "text-sm font-medium": true,
                              "text-neutral-200 dark:text-neutral-600":
                                pkgIndex === 2,
                              "text-neutral-600 dark:text-neutral-200":
                                pkgIndex !== 2,
                            })}
                          >
                            {service}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-[80%] max-w-3xl transform overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-900 p-10 sm:p-14 text-left align-middle shadow-xl transition-all">
                    <PricingForm
                      tierName={tierName}
                      pkgName={pkgName}
                      pkgPrice={pkgPrice}
                      pkgServices={pkgServices}
                    />
                    <button
                      onClick={closeModal}
                      className="absolute top-3 right-3 md:top-5 md:right-5"
                    >
                      <XMarkIcon className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />
                    </button>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Pricing;
