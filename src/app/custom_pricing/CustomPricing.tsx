"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";
import ModalForm from "./CustomForm";
import { XMarkIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";
import serviceCategories from "../utils/serviceCategories";
import CustomFormContainer from "./CustomFormContainer";

const CustomPricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [services, setServices] = useState<string[]>([]);
  const [price, setPrice] = useState(0);
  const [prevValue, setPrevValue] = useState(0);

  const updatePrice = (newPrice: number) => {
    setPrice((currentPrice) => currentPrice + newPrice);
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
              {serviceCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="font-medium text-lg">{category.name}</h4>
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center gap-3">
                      {service.name === "Ülések mélytisztítása" ? (
                        <select
                          id={`service-${serviceIndex}`}
                          name={service.name}
                          className="select w-min bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
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
                                    service.startsWith("Ülések mélytisztítása")
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
                          className="checkbox bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 [--chkbg:theme(colors.blue.500)]"
                          onChange={(e) => {
                            if (e.target.checked) {
                              updatePrice(service.price);
                              setServices((prev) => [...prev, e.target.value]);
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
                        className="hover:opacity-80 transition-opacity cursor-pointer"
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
                  onClick={() => {
                    if (price > 0) {
                      openModal();
                    } else {
                      alert("Válassz legalább egy szolgáltatást!");
                    }
                  }}
                  className="mt-10 block w-full rounded-md bg-blue-500 text-neutral-50 px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Csomag összerakása
                </button>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="Custom Tier Form"
                  className="w-[80%] max-w-3xl bg-neutral-50 dark:bg-neutral-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-[10px] border-none outline-none p-10 sm:p-14"
                  style={{
                    overlay: {
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  <CustomFormContainer price={price} services={services} />
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 md:top-5 md:right-5"
                  >
                    <XMarkIcon className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />
                  </button>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPricing;
