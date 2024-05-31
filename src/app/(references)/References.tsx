"use client";

import Image, { StaticImageData } from "next/image";
import reference1_1 from "/public/assets/images/reference1_1.webp";
import reference1_2 from "/public/assets/images/reference1_2.webp";
import reference1_3 from "/public/assets/images/reference1_3.webp";
import reference1_4 from "/public/assets/images/reference1_4.webp";
import reference1_5 from "/public/assets/images/reference1_5.webp";
import reference1_6 from "/public/assets/images/reference1_6.webp";
import reference1_7 from "/public/assets/images/reference1_7.webp";
import reference1_8 from "/public/assets/images/reference1_8.webp";
import reference1_9 from "/public/assets/images/reference1_9.webp";
import reference1_10 from "/public/assets/images/reference1_10.webp";
import reference2_1 from "/public/assets/images/reference2_1.webp";
import reference3_1 from "/public/assets/images/reference3_1.webp";
import reference4_1 from "/public/assets/images/reference4_1.webp";
import { Fragment, Ref, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Reference {
  category: string;
  title: string;
  image: StaticImageData;
  modalImages: StaticImageData[];
}

const references = [
  {
    category: "Külső tisztítás",
    title: "Jaguar F-Pace",
    image: reference1_1,
    modalImages: [
      reference1_1,
      reference1_2,
      reference1_3,
      reference1_4,
      reference1_5,
      reference1_6,
      reference1_7,
      reference1_8,
      reference1_9,
      reference1_10,
    ],
  },
  {
    category: "Külső tisztítás",
    title: "Kocsi, helyszín",
    image: reference2_1,
    modalImages: [
      reference1_1,
      reference1_2,
      reference1_3,
      reference1_4,
      reference1_5,
      reference1_6,
      reference1_7,
      reference1_8,
      reference1_9,
      reference1_10,
    ],
  },
  {
    category: "Külső tisztítás",
    title: "Kocsi, helyszín",
    image: reference3_1,
    modalImages: [
      reference1_1,
      reference1_2,
      reference1_3,
      reference1_4,
      reference1_5,
      reference1_6,
      reference1_7,
      reference1_8,
      reference1_9,
      reference1_10,
    ],
  },
  {
    category: "Külső tisztítás",
    title: "Kocsi, helyszín",
    image: reference4_1,
    modalImages: [
      reference1_1,
      reference1_2,
      reference1_3,
      reference1_4,
      reference1_5,
      reference1_6,
      reference1_7,
      reference1_8,
      reference1_9,
      reference1_10,
    ],
  },
];

const References = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentReference, setCurrentReference] = useState<Reference | null>(
    null
  );

  const openModal = (index: number) => {
    setIsOpen(true);
    setCurrentIndex(0);
    setCurrentReference(references[index]);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    if (currentReference) {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % currentReference.modalImages.length
      );
    }
  };

  const handlePrevious = () => {
    if (currentReference) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + currentReference.modalImages.length) %
          currentReference.modalImages.length
      );
    }
  };

  return (
    <div id="referenciak" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-16">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-500">
                Referenciák
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Tekintse meg néhány korábbi munkánkat
              </p>
            </div>

            {references.slice(0, 1).map((reference, index) => (
              <div key={index} className="space-y-6">
                <Image
                  className="w-full max-h-[500px] object-cover rounded-xl hover:opacity-60 hover:-translate-y-4 transition-all duration-300 cursor-pointer"
                  src={reference.image}
                  alt={reference.title}
                  onClick={() => openModal(index)}
                />
                <div className="space-y-3">
                  <p className="before:content-['\2014'] before:mr-2 text-blue-500 uppercase font-medium text-sm">
                    {reference.category}
                  </p>
                  <p className="font-semibold text-xl">{reference.title}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="space-y-16">
            {references.slice(2).map((reference, index) => (
              <div key={index} className="space-y-6">
                <Image
                  className="w-full max-h-[500px] object-cover rounded-xl hover:opacity-60 hover:-translate-y-4 transition-all duration-300 cursor-pointer"
                  src={reference.image}
                  alt={reference.title}
                  onClick={() => openModal(index)}
                />
                <div className="space-y-3">
                  <p className="before:content-['\2014'] before:mr-2 text-blue-500 uppercase font-medium text-sm">
                    {reference.category}
                  </p>
                  <p className="font-semibold text-xl">{reference.title}</p>
                </div>
              </div>
            ))}
          </div> */}
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
                  <Dialog.Panel className="w-[90%] max-w-xl min-[2000px]:max-w-4xl transform overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-900 p-10 sm:p-14 text-left align-middle shadow-xl transition-all">
                    <button
                      onClick={closeModal}
                      className="absolute top-3 right-3 md:top-5 md:right-5"
                    >
                      <XMarkIcon className="h-7 w-7 text-neutral-600 dark:text-neutral-200" />
                    </button>
                    {currentReference && (
                      <div className="space-y-8">
                        <Image
                          className="max-h-[1000px] w-full rounded-xl object-cover mx-auto"
                          src={currentReference.modalImages[currentIndex]}
                          alt={currentReference.title}
                        />
                        <div className="flex justify-between gap-5">
                          <button
                            onClick={handlePrevious}
                            className="block w-fit rounded-md bg-blue-500 text-neutral-50 px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Előző
                          </button>
                          <button
                            onClick={handleNext}
                            className="block w-fit rounded-md bg-blue-500 text-neutral-50 px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-blue-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Következő
                          </button>
                        </div>
                      </div>
                    )}
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

export default References;
