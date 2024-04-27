"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { Fragment, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import serviceCategories from "../utils/serviceCategories";
import tiers from "../utils/tiers";
import CustomFormContainer from "./CustomFormContainer";
import { useTheme } from "next-themes";

type Pkg = {
  name: string;
  key: string;
  services: string[];
  price: number;
};

const CustomPricing = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Pkg | null>(null);
  const [services, setServices] = useState<string[]>([]);
  const [price, setPrice] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [checkedServices, setCheckedServices] = useState<
    Record<string, boolean>
  >(services.reduce((acc, service) => ({ ...acc, [service]: false }), {}));

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

  const handleTier = () => {
    if (services.length > 0) {
      openModal();
    } else {
      toast.error("Válassz legalább egy szolgáltatást!");
    }

    console.log(services);
  };

  const updatePrice = (newPrice: number) => {
    setPrice((currentPrice) => currentPrice + newPrice);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">
            Személyreszabott csomag
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Szeretnéd személyre szabni szolgáltatásainkat?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-neutral-200 dark:border-neutral-800 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight">
              Szolgáltatásaink
            </h3>
            <p className="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-200">
              Állíts össze egy a saját igényeidre szabott csomagot.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-20 text-sm leading-6 text-neutral-600 dark:text-neutral-200 sm:grid-cols-2 sm:gap-10">
              <>
                {tiers.map((tier) => (
                  <div key={tier.name} className="space-y-4">
                    <h3 className="text-2xl font-semibold">
                      {tier.name} csomagok
                    </h3>
                    {tier.packages.map((pkg: Pkg) => (
                      <div
                        key={pkg.name}
                        className={classNames({
                          "flex items-center gap-3": true,
                          "cursor-not-allowed":
                            selectedPackage && selectedPackage.key !== pkg.key,
                        })}
                      >
                        <input
                          id={pkg.key}
                          name={pkg.key}
                          value={pkg.key}
                          type="checkbox"
                          className="checkbox bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 [--chkbg:theme(colors.blue.500)] disabled:bg-neutral-300 dark:disabled:bg-neutral-700"
                          disabled={
                            (selectedPackage &&
                              selectedPackage.key !== pkg.key) ||
                            false
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              setServices([]);
                              setPrice(0);

                              setCheckedServices(
                                services.reduce(
                                  (acc, service) => ({
                                    ...acc,
                                    [service]: false,
                                  }),
                                  {}
                                )
                              );

                              // const inputs = document.querySelectorAll(
                              //   'input[aria-label="service"]'
                              // );
                              // inputs.forEach((input) => {
                              //   (input as HTMLInputElement).checked = false;
                              // });

                              // const select = document.querySelector(
                              //   'select[aria-label="service"]'
                              // );
                              // if (select) {
                              //   (select as HTMLSelectElement).selectedIndex = 0;
                              // }

                              updatePrice(pkg.price);
                              setServices((prev) => [...prev, e.target.value]);
                              setSelectedPackage(pkg);
                            } else {
                              updatePrice(-pkg.price);
                              setServices((prev) =>
                                prev.filter(
                                  (service) => service !== e.target.value
                                )
                              );
                              setSelectedPackage(null);
                            }
                          }}
                        />
                        <label
                          htmlFor={pkg.key}
                          className={classNames({
                            "hover:opacity-80 transition-opacity cursor-pointer":
                              !selectedPackage ||
                              selectedPackage.key === pkg.key,
                            "opacity-50 cursor-not-allowed":
                              selectedPackage &&
                              selectedPackage.key !== pkg.key,
                          })}
                        >
                          {pkg.name} - {pkg.price.toLocaleString("de-DE")} Ft
                        </label>
                      </div>
                    ))}
                  </div>
                ))}

                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="font-medium text-lg">{category.name}</h4>
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className={classNames({
                          "flex items-center gap-3": true,
                          "cursor-not-allowed":
                            selectedPackage &&
                            selectedPackage.services.includes(service.name),
                        })}
                      >
                        {service.name === "Ülések mélytisztítása" ? (
                          <select
                            id={`service-${serviceIndex}`}
                            aria-label="service"
                            name={service.name}
                            className="select w-min bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 disabled:border-0 disabled:text-neutral-400 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-600"
                            disabled={
                              (selectedPackage &&
                                selectedPackage.services.includes(
                                  service.name
                                )) ||
                              false
                            }
                            onChange={(e) => {
                              if (Number(e.target.value) !== prevValue) {
                                const newValue = Number(e.target.value);
                                const priceDifference =
                                  service.price * (newValue - prevValue);
                                updatePrice(priceDifference);
                                setPrevValue(newValue);

                                setServices((prev) => {
                                  const newService = `Ülések mélytisztítása - ${e.target.value} db`;
                                  let found = false;
                                  const newServices = prev.map((service) => {
                                    if (
                                      service.startsWith(
                                        "Ülések mélytisztítása"
                                      )
                                    ) {
                                      found = true;
                                      return newService;
                                    }
                                    return service;
                                  });
                                  if (!found) {
                                    newServices.push(newService);
                                  }
                                  return newServices;
                                });
                              }
                            }}
                          >
                            {[...Array(10)].map((_, i) => (
                              <option key={i}>{i}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            id={service.name}
                            name={service.name}
                            value={service.name}
                            type="checkbox"
                            aria-label="service"
                            checked={checkedServices[service.name] || false}
                            className="checkbox bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 [--chkbg:theme(colors.blue.500)] disabled:bg-neutral-300 dark:disabled:bg-neutral-700"
                            disabled={
                              (selectedPackage &&
                                selectedPackage.services.includes(
                                  service.name
                                )) ||
                              false
                            }
                            onChange={(e) => {
                              setCheckedServices({
                                ...checkedServices,
                                [e.target.name]: e.target.checked,
                              });

                              if (e.target.checked) {
                                updatePrice(service.price);
                                setServices((prev) => [
                                  ...prev,
                                  e.target.value,
                                ]);
                              } else {
                                updatePrice(-service.price);
                                setServices((prev) =>
                                  prev.filter(
                                    (service) => service !== e.target.value
                                  )
                                );
                              }
                            }}
                          />
                        )}
                        <label
                          htmlFor={service.name}
                          className={classNames({
                            "hover:opacity-80 transition-opacity cursor-pointer":
                              !selectedPackage ||
                              !selectedPackage.services.includes(service.name),
                            "opacity-50 cursor-not-allowed":
                              selectedPackage &&
                              selectedPackage.services.includes(service.name),
                          })}
                        >
                          {service.name === "Ülések mélytisztítása"
                            ? `${service.name} - ${service.price.toLocaleString(
                                "de-DE"
                              )} Ft/db`
                            : `${service.name} - ${service.price.toLocaleString(
                                "de-DE"
                              )} Ft`}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="h-full rounded-2xl bg-neutral-50 dark:bg-neutral-900 py-10 text-center border border-neutral-200 dark:border-neutral-800 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-blue-500">
                  Összegzés
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">
                    {price.toLocaleString("de-DE")}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-neutral-600 dark:text-neutral-200">
                    Ft
                  </span>
                </p>
                <button
                  onClick={handleTier}
                  className="mt-10 block w-full rounded-md bg-blue-500 text-neutral-50 px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Csomag összerakása
                </button>
                <Toaster
                  reverseOrder={true}
                  gutter={16}
                  toastOptions={{
                    duration: 5000,
                    style:
                      themeToUse === "light"
                        ? lightThemeToastStyle
                        : darkThemeToastStyle,
                  }}
                />
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
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
                            <CustomFormContainer
                              price={price}
                              services={services}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPricing;
