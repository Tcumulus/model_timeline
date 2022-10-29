export const global = {
  models: [
    {
      abbreviation: "GFS",
      name: "Global Forecasting System",
      country: "USA",
      color: "#ff7d26",
      runs: [
        { run: "00", window: "+384", start: 210, end: 300 },
        { run: "06", window: "+384", start: 570, end: 660 },
        { run: "12", window: "+384", start: 930, end: 1020 },
        { run: "18", window: "+384", start: 1290, end: 1380 }
      ],
      sites: [
        { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/gfse_cartes.php" },
        { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?model=ecm&lid=OP" }
      ]
    },
    {
      abbreviation: "ECMWF",
      name: "European Centre for Medium-Range Weather Forecasts",
      country: "EU",
      color: "#26ff81",
      runs: [
        { run: "00", window: "+240", start: 360, end: 420 },
        { run: "12", window: "+240", start: 1080, end: 1140 },
      ],
      sites: [
        { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/gfse_cartes.php" },
        { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?model=ecm&lid=OP" }
      ]
    }
  ],
  sites: [
    {
      name: "meteociel.fr",
      language: "French",
      href: "https://www.meteociel.fr"
    },
    {
      name: "wetterzentrale.fr",
      language: "English",
      href: "https://www.wetterzentrale.de"
    }
  ]
}