import { CheckIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import tiers from "../utils/tiers";

const Pricing = () => {
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
                      {pkg.price}
                    </p>
                    <button
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
      </div>
    </div>
  );
};

export default Pricing;
