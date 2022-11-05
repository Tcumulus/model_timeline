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
            { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?model=gfs&lid=OP" }
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
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/ecmwf.php" },
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
            { run: "00", window: "+180", start: 160, end: 200 },
            { run: "06", window: "+120", start: 520, end: 550 },
            { run: "12", window: "+180", start: 880, end: 920 },
            { run: "18", window: "+120", start: 1240, end: 1270 },
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/icone_cartes.php" },
            { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?model=ico&lid=OP" }
          ]
        },
        {
          abbreviation: "GEM",
          name: "Global Environmental Multiscale Model",
          country: "CA",
          color: "#cc001b",
          runs: [
            { run: "00", window: "+240", start: 210, end: 270 },
            { run: "12", window: "+240", start: 930, end: 990 },
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/geme_cartes.php" },
            { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?model=gem&lid=OP" }
          ]
        },
        {
          abbreviation: "ARPEGE",
          name: "Action de Recherche Petite Echelle Grande Echelle",
          country: "FR",
          color: "#be03fc",
          runs: [
            { run: "00", window: "+114", start: 240, end: 300 },
            { run: "06", window: "+102", start: 600, end: 660 },
            { run: "12", window: "+114", start: 960, end: 1020 },
            { run: "18", window: "+102", start: 1320, end: 1380 },
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/arpegee_cartes.php" }
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
          color: "#be03fc",
          runs: [
            { run: "00", window: "+51", start: 240, end: 315 },
            { run: "03", window: "+51", start: 420, end: 495 },
            { run: "06", window: "+51", start: 600, end: 675 },
            { run: "09", window: "+51", start: 780, end: 855 },
            { run: "12", window: "+51", start: 960, end: 1035 },
            { run: "15", window: "+51", start: 1140, end: 1215 },
            { run: "18", window: "+51", start: 1320, end: 1395 },
            { run: "21", window: "+51", start: 60, end: 135 },
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/arome.php" }
          ]
        },
        {
          abbreviation: "Harmonie",
          name: "HIRLAM ALADIN Research on Mesoscale Operational NWP in Euromed",
          country: "NL",
          color: "#d3fc03",
          runs: [
            { run: "00", window: "+48", start: 210, end: 260 },
            { run: "06", window: "+48", start: 570, end: 620 },
            { run: "12", window: "+48", start: 930, end: 980 },
            { run: "18", window: "+48", start: 1290, end: 1340 },
          ],
          sites: [
            { name: "weerplaza.nl", href: "https://www.weerplaza.nl/weerkaarten/harmonie/" },
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/harmonie.php" }
          ]
        },
        {
          abbreviation: "ICON-D2",
          name: "Icosahedral Nonhydrostatic D2",
          country: "DE",
          color: "#fc033d",
          runs: [
            { run: "00", window: "+48", start: 225, end: 260 },
            { run: "03", window: "+48", start: 405, end: 440 },
            { run: "06", window: "+48", start: 585, end: 620 },
            { run: "09", window: "+48", start: 765, end: 800 },
            { run: "12", window: "+48", start: 945, end: 980 },
            { run: "15", window: "+48", start: 1125, end: 1160 },
            { run: "18", window: "+48", start: 1305, end: 1340 },
            { run: "21", window: "+48", start: 45, end: 80 },
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/icon-d2.php" }
          ]
        },
        {
          abbreviation: "SWISS-HD",
          name: "SWISS-HD (Kachelman)",
          country: "CH",
          color: "#03fcc6",
          runs: [
            { run: "00", window: "+72", start: 285, end: 495 },
            { run: "06", window: "+72", start: 645, end: 855 },
            { run: "12", window: "+72", start: 1005, end: 1215 },
            { run: "18", window: "+72", start: 1365, end: 135 },
          ],
          sites: [
            { name: "meteologix.com", href: "https://meteologix.com/be/model-charts/swisshd-eu" }
          ]
        },
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
            { run: "00", window: "+384", start: 240, end: 390 },
            { run: "06", window: "+384", start: 600, end: 750 },
            { run: "12", window: "+384", start: 960, end: 1110 },
            { run: "18", window: "+384", start: 1320, end: 1470 }
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/gefs_cartes.php" },
            { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?map=1&model=gfs&lid=AVG" }
          ]
        },
        {
          abbreviation: "EPS",
          name: "ECMWF Ensemble Prediction System",
          country: "EU",
          color: "#26ff81",
          runs: [
            { run: "00", window: "+384", start: 420, end: 495 },
            { run: "12", window: "+384", start: 1140, end: 1215 }
          ],
          sites: [
            { name: "wetterzentrale.de", href: "https://www.wetterzentrale.de/en/topkarten.php?map=1&model=ecm&lid=AVG" }
          ]
        },
      ],
    }
  ]
}