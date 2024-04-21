import { CheckIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";

const tiers = [
  {
    category: "Belső tisztítás",
    packages: [
      {
        name: "Alap csomag",
        key: "belso-alap",
        services: [
          "Porszívózás",
          "Portalanítás",
          "Ablakok tisztítása",
          "Lábtörlők tisztítása",
        ],
        price: "6.000 Ft",
      },
      {
        name: "Extra csomag",
        key: "belso-extra",
        services: [
          "Porszívózás",
          "Portalanítás",
          "Ablakok tisztítása",
          "Lábtörlők tisztítása",
          "Műanyagok tisztítása és ápolás",
          "Bőr tisztítása és ápolása",
          "Ülések mély tisztítása",
          "Csomagtér tisztása",
        ],
        price: "20.000 Ft",
      },
      {
        name: "Prémium csomag",
        key: "belso-premium",
        services: [
          "Porszívózás",
          "Portalanítás",
          "Ablakok tisztítása",
          "Lábtörlők tisztítása",
          "Műanyagok tisztítása és ápolás",
          "Bőr tisztítása és ápolása",
          "Ülések + szőnyegek mély tisztítása",
          "Csomagtér tisztása",
          "Illatosítás és szagtalanítás",
        ],
        price: "25.000 Ft",
      },
    ],
  },
  {
    category: "Külső mosás",
    packages: [
      {
        name: "Alap csomag",
        key: "kulso-alap",
        services: ["Samponos mosás", "Bogároldás", "Ablakpucolás"],
        price: "6.000 Ft",
      },
      {
        name: "Extra csomag",
        key: "kulso-extra",
        services: [
          "Samponos mosás",
          "Bogároldás",
          "Ablakpucolás",
          "Felni tisztítás",
          "Gumi ápolás és tisztítás",
        ],
        price: "10.000 Ft",
      },
      {
        name: "Prémium csomag",
        key: "kulso-premium",
        services: [
          "Samponos mosás",
          "Bogároldás",
          "Ablakpucolás",
          "Felni tisztítás",
          "Gumi ápolás és tisztítás",
          "Kerámia bevonat",
        ],
        price: "12.000 Ft",
      },
    ],
  },
  {
    category: "Plusz szolgáltatásaink",
    packages: [
      {
        name: "Ózonos tisztítás",
        key: "ozonos-tisztitas",
        services: [],
        price: "5.000 Ft",
      },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
        <div className="mx-auto lg:max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">
            Csomagjaink
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Mit nyújtunk?
          </p>
        </div>
        <div className="space-y-20">
          {tiers.slice(0, 2).map((tier) => (
            <div key={tier.category} className="space-y-10">
              <h3 className="text-2xl font-semibold lg:text-center">
                {tier.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {tier.packages.map((pkg, pkgIndex) => (
                  <div
                    key={pkg.key}
                    className={classNames({
                      "p-10 rounded-3xl shadow-md border border-neutral-200 dark:border-neutral-800 space-y-5":
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
                        "bg-blue-500 hover:bg-blue-400 transition-colors text-neutral-50 py-2 px-4 rounded-md font-semibold text-sm":
                          true,
                        "bg-white/10 hover:bg-white/20 dark:bg-neutral-600 dark:hover:bg-neutral-500":
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
          {tiers.slice(2, 3).map((tier) => (
            <div key={tier.category} className="space-y-10">
              <h3 className="text-2xl font-semibold lg:text-center">
                {tier.category}
              </h3>

              {tier.packages.map((pkg) => (
                <div
                  key={pkg.key}
                  className="shadow-md p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-5 max-w-sm lg:mx-auto"
                >
                  <h4 className="font-semibold">{pkg.name}</h4>
                  <p className="text-3xl sm:text-4xl font-bold">{pkg.price}</p>
                  <button className="bg-blue-500 hover:bg-blue-400 transition-colors text-neutral-50 py-2 px-4 rounded-md font-semibold text-sm">
                    Ezt választom
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
