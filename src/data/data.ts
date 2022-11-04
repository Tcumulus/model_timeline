export const data = {
  categories: [
    {
      models: [
        {
          abbreviation: "GFS",
          name: "Global Forecasting System",
          country: "USA",
          color: "#ff7d26",
          runs: [
            { run: "00", window: "+384", start: 210, end: 315 },
            { run: "06", window: "+384", start: 570, end: 675 },
            { run: "12", window: "+384", start: 930, end: 1035 },
            { run: "18", window: "+384", start: 1290, end: 1395 }
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
        },
        {
          abbreviation: "UKMO",
          name: "United Kingdom Meteorological Office",
          country: "UK",
          color: "#1587b0",
          runs: [
            { run: "00", window: "+168", start: 235, end: 275 },
            { run: "12", window: "+168", start: 955, end: 995 },
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/ukmoeu.php" }
          ]
        },
        {
          abbreviation: "ICON",
          name: "Icosahedral Nonhydrostatic Model",
          country: "DE",
          color: "#ed15b0",
          runs: [
            { run: "00", window: "+180", start: 150, end: 195 },
            { run: "06", window: "+120", start: 510, end: 540 },
            { run: "12", window: "+180", start: 870, end: 915 },
            { run: "18", window: "+120", start: 1230, end: 1260 },
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/ukmoeu.php" }
          ]
        }
      ]
    },

    {
      models: [
        {
          abbreviation: "Arome",
          name: "Application of Research at the Operational Mesoscale",
          country: "FR",
          color: "#0230ad",
          runs: [
            { run: "00", window: "+51", start: 200, end: 250 },
            { run: "03", window: "+51", start: 380, end: 430 },
            { run: "06", window: "+51", start: 560, end: 610 },
            { run: "09", window: "+51", start: 740, end: 790 },
            { run: "12", window: "+51", start: 920, end: 970 },
            { run: "15", window: "+51", start: 1100, end: 1150 },
            { run: "18", window: "+51", start: 1280, end: 1330 },
            { run: "21", window: "+51", start: 20, end: 70 },
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/gfse_cartes.php" },
            { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?model=ecm&lid=OP" }
          ]
        }
      ]
    },


    {
      models: [
        {
          abbreviation: "GEFS",
          name: "Global Forecasting System Ensemble",
          country: "USA",
          color: "#ff7d26",
          runs: [
            { run: "00", window: "+384", start: 210, end: 390 },
            { run: "06", window: "+384", start: 570, end: 750 },
            { run: "12", window: "+384", start: 930, end: 1110 },
            { run: "18", window: "+384", start: 1290, end: 1470 }
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/gfse_cartes.php" },
            { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?model=ecm&lid=OP" }
          ]
        },
        {
          abbreviation: "EPS",
          name: "ECMWF Ensemble Prediction System",
          country: "EU",
          color: "#26ff81",
          runs: [
            { run: "00", window: "+384", start: 420, end: 480 },
            { run: "12", window: "+384", start: 1140, end: 1200 }
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/gfse_cartes.php" },
            { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?model=ecm&lid=OP" }
          ]
        },
      ],
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