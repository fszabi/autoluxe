"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import serviceCategories from "../utils/serviceCategories";
import tiers from "../utils/tiers";
import CustomFormContainer from "./CustomFormContainer";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

type Tier = {
  name: string;
  key: string;
  packages: Pkg[];
};

type Pkg = {
  name: string;
  tier: string;
  key: string;
  services: string[];
  price: number;
};

type Service = {
  name: string;
  price: number;
};

type ServiceCategory = {
  name: string;
  services: Service[];
};

const CustomPricing = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showTiers, setShowTiers] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [insidePrice, setInsidePrice] = useState(0);
  const [outsidePrice, setOutsidePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [services, setServices] = useState<string[]>([]);
  const [filteredServiceCategories, setFilteredServiceCategories] = useState<
    ServiceCategory[]
  >([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTotalPrice(insidePrice + outsidePrice);
  }, [insidePrice, outsidePrice]);

  useEffect(() => {
    const initialFilteredServiceCategories = serviceCategories
      .map((category: ServiceCategory) => ({
        ...category,
        services: category.services.filter(
          (service) => !services.includes(service.name)
        ),
      }))
      .filter((category) => category.services.length > 0);

    setFilteredServiceCategories(initialFilteredServiceCategories);
  }, [showServices]);

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

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handlePackageSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    tier: Tier
  ) => {
    console.log(e.target.value);

    const selectedPkg = tier.packages.find((pkg) => pkg.key === e.target.value);

    if (selectedPkg) {
      if (tier.key === "belso") {
        setInsidePrice(selectedPkg.price);
      } else if (tier.key === "kulso") {
        setOutsidePrice(selectedPkg.price);
      }

      const servicesWithoutCurrentTier = services.filter(
        (service) =>
          !tier.packages.some((pkg) => pkg.services.includes(service))
      );

      console.log(servicesWithoutCurrentTier);

      setServices([...servicesWithoutCurrentTier, ...selectedPkg.services]);

      console.log([...servicesWithoutCurrentTier, ...selectedPkg.services]);
    } else {
      if (tier.key === "belso") {
        setInsidePrice(0);
      } else if (tier.key === "kulso") {
        setOutsidePrice(0);
      }

      const servicesWithoutCurrentTier = services.filter(
        (service) =>
          !tier.packages.some((pkg) => pkg.services.includes(service))
      );

      console.log(servicesWithoutCurrentTier);

      setServices(servicesWithoutCurrentTier);

      console.log(servicesWithoutCurrentTier);
    }
  };

  const handleServiceCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    service: Service
  ) => {
    if (e.target.checked) {
      setTotalPrice(totalPrice + service.price);
      // Add the service to the services array

      setServices((prevServices) => [...prevServices, service.name]);

      console.log(services);
    } else {
      setTotalPrice(totalPrice - service.price);
      // Remove the service from the services array
      setServices((prevServices) =>
        prevServices.filter((s) => s !== service.name)
      );

      console.log(services);
    }
  };

  const handleServiceSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    service: Service
  ) => {
    const newValue = parseInt(e.target.value);
    const priceDifference = newValue - prevValue;
    setTotalPrice(totalPrice + priceDifference * service.price);
    setPrevValue(newValue);

    if (services.includes(service.name)) {
      setServices(services.filter((s) => s !== service.name));

      console.log(services);
    } else {
      setServices([...services, service.name]);

      console.log(services);
    }
  };

  const resetStates = () => {
    setShowTiers(false);
    setShowServices(false);
    setInsidePrice(0);
    setOutsidePrice(0);
    setTotalPrice(0);
    setPrevValue(0);
    setServices([]);
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">
            Személyreszabott csomag
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Állítson össze egy a saját igényére szabott csomagot.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-neutral-200 dark:border-neutral-800 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="relative p-8 sm:p-10 lg:flex-auto">
            <button className="absolute top-5 right-5" onClick={resetStates}>
              <ArrowPathIcon className="w-6 h-6 shrink-0" />
            </button>
            {!showTiers && !showServices && (
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-xl font-semibold">
                    Személyreszabott csomag
                  </p>
                  <h3 className="font-medium">
                    Szeretné külső ésvagy belső csomagot választani előszőr, és
                    hozzáadni plusz szolgáltatásokat, vagy teljesen a nulláról
                    felépíteni egy csomagot?
                  </h3>
                </div>
                <div className="flex gap-5">
                  <button
                    onClick={() => setShowTiers(true)}
                    className="block w-fit rounded-md bg-blue-500 text-neutral-50 px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Választok először
                  </button>
                  <button
                    onClick={() => setShowServices(true)}
                    className="block w-fit rounded-md bg-blue-500 text-neutral-50 px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Nulláról építem fel
                  </button>
                </div>
              </div>
            )}
            {showTiers && (
              <div className="grid grid-cols-1 gap-20 text-sm leading-6 text-neutral-600 dark:text-neutral-200 sm:grid-cols-2 sm:gap-8">
                {tiers.map((tier) => (
                  <div key={tier.name} className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      {tier.name} csomagok
                    </h3>
                    <select
                      className="select w-min bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 disabled:border-0 disabled:text-neutral-400 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-600"
                      onChange={(e) => {
                        handlePackageSelect(e, tier);
                      }}
                    >
                      <option value="">-</option>
                      {tier.packages.map((pkg: Pkg) => (
                        <option key={pkg.name} value={pkg.key}>
                          {pkg.name} - {pkg.price.toLocaleString("de-DE")} Ft
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
                <button
                  onClick={() => {
                    if (totalPrice > 0) {
                      setShowTiers(false);
                      setShowServices(true);
                    } else {
                      toast.error("Válasszon csomagot!");
                    }
                  }}
                  className="block w-fit rounded-md bg-blue-500 text-neutral-50 px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Tovább a szolgáltatásokhoz
                </button>
              </div>
            )}
            {showServices && (
              <div className="grid grid-cols-1 gap-20 text-sm leading-6 text-neutral-600 dark:text-neutral-200 sm:grid-cols-2 sm:gap-8">
                <>
                  {filteredServiceCategories.map((category, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="text-xl font-semibold">{category.name}</h4>
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex gap-3 items-center"
                        >
                          {service.name === "Ülések mélytisztítása" ? (
                            <select
                              id={service.name}
                              name={service.name}
                              onChange={(e) => {
                                handleServiceSelect(e, service);
                              }}
                              className="select w-min bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 disabled:border-0 disabled:text-neutral-400 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-600"
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
                              onChange={(e) => {
                                handleServiceCheck(e, service);
                              }}
                              className="checkbox bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 [--chkbg:theme(colors.blue.500)] disabled:bg-neutral-300 dark:disabled:bg-neutral-700"
                            />
                          )}
                          <label htmlFor={service.name}>
                            {service.name === "Ülések mélytisztítása"
                              ? `${
                                  service.name
                                } - ${service.price.toLocaleString(
                                  "de-DE"
                                )} Ft/db`
                              : `${
                                  service.name
                                } - ${service.price.toLocaleString(
                                  "de-DE"
                                )} Ft`}
                          </label>
                        </div>
                      ))}
                    </div>
                  ))}
                </>
              </div>
            )}
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="h-full rounded-2xl bg-neutral-50 dark:bg-neutral-900 py-10 text-center border border-neutral-200 dark:border-neutral-800 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-blue-500">
                  Összegzés
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">
                    {totalPrice.toLocaleString("de-DE")}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-neutral-600 dark:text-neutral-200">
                    Ft
                  </span>
                </p>
                <button
                  onClick={() => {
                    if (totalPrice === 0) {
                      toast.error("Az összeg nem lehet 0 Ft!");
                    } else {
                      openModal();
                    }
                  }}
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
                              price={totalPrice}
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