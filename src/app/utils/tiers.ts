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
          "Műanyagok tisztítása és ápolása",
          "Bőr tisztítása és ápolása",
          "Ülések mély tisztítása",
          "Csomagtér tisztítása",
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
          "Műanyagok tisztítása és ápolása",
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
    name: "Külső mosás",
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
          "Gumi tisztítás és ápolás",
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
          "Gumi tisztítás és ápolás",
          "Kerámia bevonat",
        ],
        price: "12.000 Ft",
      },
    ],
  },
];

export default tiers;
