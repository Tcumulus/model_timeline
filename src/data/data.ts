export const global = {
  models: [
    {
      abbrevation: "GFS",
      name: "Global Forecasting System",
      runs: [
        { run: "00", window: "+384", start: 270, end: 310 },
        { run: "06", window: "+384", start: 360, end: 400 }
      ],
      sites: [
        { name: "meteociel", href: "https://www.meteociel.fr/modeles/gfse_cartes.php" },
        { name: "wetterzentrale", href: "https://www.wetterzentrale.de/en/topkarten.php?model=ecm&lid=OP" }
      ]
    },
    {
      abbrevation: "ECMWF",
      name: "European Centre for Medium-Range Weather Forecasts",
      runs: [
        { run: "00", window: "+240", start: 400, end: 460 },
        { run: "06", window: "+90", start: 500, end: 530 }
      ],
      sites: [
        { name: "meteociel", href: "https://www.meteociel.fr/modeles/gfse_cartes.php" },
        { name: "wetterzentrale", href: "https://www.wetterzentrale.de/en/topkarten.php?model=ecm&lid=OP" }
      ]
    }
  ]
}