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
          "Belső ablakpucolás",
          "Gumiszőnyeg tisztítás",
        ],
        price: 5000,
      },
      {
        name: "Extra csomag",
        tier: "belso",
        key: "belso-extra",
        services: [
          "Porszívózás",
          "Portalanítás",
          "Belső ablakpucolás",
          "Gumiszőnyeg tisztítás",
          "Műanyagok tisztítása",
          "Bőr tisztítás és ápolás",
          "Csomagtér",
          "Ülések mélytisztítása",
        ],
        price: 15000,
      },
      {
        name: "Prémium csomag",
        tier: "belso",
        key: "belso-premium",
        services: [
          "Porszívózás",
          "Portalanítás",
          "Belső ablakpucolás",
          "Gumiszőnyeg tisztítás",
          "Műanyagok tisztítása",
          "Bőr tisztítás és ápolás",
          "Csomagtér",
          "Ülések mélytisztítása",
          "Szőnyegek mélytisztítása",
          "Illatosítás",
        ],
        price: 20000,
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
        services: ["Samponos mosás", "Külső ablakpucolás"],
        price: 5000,
      },
      {
        name: "Extra csomag",
        tier: "kulso",
        key: "kulso-extra",
        services: [
          "Samponos mosás",
          "Külső ablakpucolás",
          "Bogároldás",
          "Felni tisztítás",
          "Gumiabroncs tisztítás",
        ],
        price: 10000,
      },
      {
        name: "Prémium csomag",
        tier: "kulso",
        key: "kulso-premium",
        services: [
          "Samponos mosás",
          "Külső ablakpucolás",
          "Bogároldás",
          "Felni tisztítás",
          "Gumiabroncs tisztítás",
          "Kerámia bevonat",
        ],
        price: 12000,
      },
    ],
  },
];

export default tiers;
