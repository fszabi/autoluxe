import {
  RocketLaunchIcon,
  ClockIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import car_cleaning from "/public/assets/images/car_cleaning.jpg";
import Image from "next/image";

const features = [
  {
    name: "Precizitás",
    description:
      "Minőségi eszközeinek és tisztítószereinknek köszönhetően magas színvonalú, igényes munkát tudunk végezni!",
    icon: RocketLaunchIcon,
  },
  {
    name: "Időtakarékosság",
    description:
      "Amíg Ön dolgozik, ügyeket intéz, sportol, addig mi gondoskodunk autója csillogásáról!",
    icon: ClockIcon,
  },
  {
    name: "Házhoz megyünk",
    description:
      "Otthona kényelméből élvezheti, ahogy autóját tisztává varázsoljuk!",
    icon: HomeIcon,
  },
];

const Features2 = () => {
  return (
    <div id="elonyok" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-500">
                Bízza ránk autóját!
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Miért minket válasszon?
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                Csapatunk arra törekszik, hogy a lehető legjobb minőségű
                szolgáltatást nyújtsa.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-blue-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="text-neutral-600 dark:text-neutral-300">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={car_cleaning}
            alt="Product screenshot"
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Features2;
