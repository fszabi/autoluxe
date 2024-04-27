const tiers = [
  {
    name: "Belső tisztítás",
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
        price: 6000,
      },
      {
        name: "Extra csomag",
        key: "belso-extra",
        services: [
          "Porszívózás",
          "Portalanítás",
          "Ablakok tisztítása",
          "Lábtörlők tisztítása",
          "Műanyagok tisztítása és ápolása",
          "Bőr tisztítása és ápolása",
          "Ülések mélytisztítása",
          "Csomagtér tisztítása",
        ],
        price: 20000,
      },
      {
        name: "Prémium csomag",
        key: "belso-premium",
        services: [
          "Porszívózás",
          "Portalanítás",
          "Ablakok tisztítása",
          "Lábtörlők tisztítása",
          "Műanyagok tisztítása és ápolása",
          "Bőr tisztítása és ápolása",
          "Ülések mélytisztítása",
          "Csomagtér tisztítása",
          "Teljes szőnyegzet mélytisztítása",
          "Illatosítás és szagtalanítás",
        ],
        price: 25000,
      },
    ],
  },
  {
    name: "Külső mosás",
    packages: [
      {
        name: "Alap csomag",
        key: "kulso-alap",
        services: ["Samponos mosás", "Bogároldás", "Ablakpucolás"],
        price: 6000,
      },
      {
        name: "Extra csomag",
        key: "kulso-extra",
        services: [
          "Samponos mosás",
          "Bogároldás",
          "Ablakpucolás",
          "Felnik tisztítása",
          "Gumi tisztítás és ápolás",
        ],
        price: 10000,
      },
      {
        name: "Prémium csomag",
        key: "kulso-premium",
        services: [
          "Samponos mosás",
          "Bogároldás",
          "Ablakpucolás",
          "Felnik tisztítása",
          "Gumi tisztítás és ápolás",
          "Kerámia bevonat",
        ],
        price: 12000,
      },
    ],
  },
];

export default tiers;
