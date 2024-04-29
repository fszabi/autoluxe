const tiers = [
  {
    name: "Belső tisztítás",
    key: "belso",
    packages: [
      {
        name: "Alap csomag",
        tier: "belso",
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
        tier: "belso",
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
        tier: "belso",
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
    key: "kulso",
    packages: [
      {
        name: "Alap csomag",
        tier: "kulso",
        key: "kulso-alap",
        services: ["Samponos mosás", "Bogároldás", "Ablakpucolás"],
        price: 6000,
      },
      {
        name: "Extra csomag",
        tier: "kulso",
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
        tier: "kulso",
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
