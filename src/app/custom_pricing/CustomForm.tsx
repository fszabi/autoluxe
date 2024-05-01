import { useForm, ValidationError } from "@formspree/react";
import SwitchComponent from "../components/SwitchComponent";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  price: number;
  services: string[];
}

const CustomForm = ({ price, services }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_CUSTOM_PRICING_FORM!
  );

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  if (state.succeeded) {
    openModal();
    return <p>Thanks for your submission!</p>;
  }

  return (
    <>
      <div className="space-y-10">
        <div className="p-5 sm:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-5">
          <h4 className="font-semibold max-[350px]:text-sm">
            Személyreszabott csomag
          </h4>
          <p className="max-[350px]:text-2xl text-3xl sm:text-4xl font-bold">
            {price.toLocaleString("de-DE")} Ft
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <input type="hidden" name="price" value={price} />
          <input
            type="hidden"
            name="services"
            value={JSON.stringify(services)}
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6"
              >
                Keresztnév
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6"
              >
                Vezetéknév
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6"
              >
                Telefonszám
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6"
              >
                Üzenet
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-neutral-50 dark:bg-neutral-900 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <SwitchComponent />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={state.submitting}
              className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-neutral-50 shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Küldés
            </button>
          </div>
          <ValidationError errors={state.errors} />
        </form>
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
                  Köszönjük rendelését! Hamarosan felvesszük Önnel a
                  kapcsolatot.
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
    </>
  );
};

export default CustomForm;
