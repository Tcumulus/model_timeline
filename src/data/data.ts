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
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/ukmo2.php" }
          ]
        },
        {
          abbreviation: "ICON",
          name: "Icosahedral Nonhydrostatic Model",
          country: "DE",
          color: "#ed15b0",
          runs: [
            { run: "00", window: "+180", start: 160, end: 205 },
            { run: "06", window: "+120", start: 520, end: 555 },
            { run: "12", window: "+180", start: 880, end: 925 },
            { run: "18", window: "+120", start: 1240, end: 1275 },
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
            { run: "00", window: "+240", start: 215, end: 275 },
            { run: "12", window: "+240", start: 935, end: 995 },
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
            { run: "00", window: "+102", start: 180, end: 225 },
            { run: "06", window: "+102", start: 600, end: 645 },
            { run: "12", window: "+114", start: 900, end: 945 },
            { run: "18", window: "+102", start: 1320, end: 1365 },
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
            { run: "00", window: "+51", start: 180, end: 255 },
            { run: "03", window: "+51", start: 360, end: 405 },
            { run: "06", window: "+51", start: 600, end: 675 },
            { run: "09", window: "+51", start: 755, end: 795 },
            { run: "12", window: "+51", start: 900, end: 975 },
            { run: "15", window: "+51", start: 1080, end: 1125 },
            { run: "18", window: "+51", start: 1330, end: 1405 },
            { run: "21", window: "+51", start: 35, end: 75 },
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
          abbreviation: "Harmonie43",
          name: "HIRLAM ALADIN Research on Mesoscale Operational NWP in Euromed cyclus 43",
          country: "NL",
          color: "#d3fc03",
          runs: [
            { run: "00", window: "+53", start: 170, end: 180 },
            { run: "01", window: "+53", start: 230, end: 240 },
            { run: "02", window: "+53", start: 290, end: 300 },
            { run: "03", window: "+53", start: 350, end: 360 },
            { run: "04", window: "+53", start: 410, end: 420 }, 
            { run: "05", window: "+53", start: 470, end: 480 },
            { run: "05", window: "+53", start: 530, end: 540 },
            { run: "07", window: "+53", start: 590, end: 600 },
            { run: "08", window: "+53", start: 650, end: 660 },
            { run: "09", window: "+53", start: 710, end: 720 },
            { run: "10", window: "+53", start: 770, end: 780 },
            { run: "11", window: "+53", start: 830, end: 840 },
            { run: "12", window: "+53", start: 890, end: 900 },
            { run: "13", window: "+53", start: 950, end: 960 },
            { run: "14", window: "+53", start: 1010, end: 1020 },
            { run: "15", window: "+53", start: 1070, end: 1080 },
            { run: "16", window: "+53", start: 1130, end: 1140 }, 
            { run: "17", window: "+53", start: 1190, end: 1200 },
            { run: "18", window: "+53", start: 1250, end: 1260 },
            { run: "19", window: "+53", start: 1310, end: 1320 },
            { run: "20", window: "+53", start: 1370, end: 1380 },
            { run: "21", window: "+53", start: 1430, end: 1440 },
            { run: "22", window: "+53", start: 50, end: 60 },
            { run: "23", window: "+53", start: 110, end: 120 },
          ],
          sites: [
            { name: "meteociel.fr", href: "https://www.meteociel.fr/modeles/harmonie.php?ech=3&mode=1&map=530" }
          ]
        },
        {
          abbreviation: "ICON-D2",
          name: "Icosahedral Nonhydrostatic D2",
          country: "DE",
          color: "#fc033d",
          runs: [
            { run: "00", window: "+48", start: 45, end: 80 },
            { run: "03", window: "+48", start: 225, end: 260 },
            { run: "06", window: "+48", start: 405, end: 440 },
            { run: "09", window: "+48", start: 585, end: 620 },
            { run: "12", window: "+48", start: 765, end: 800 },
            { run: "15", window: "+48", start: 945, end: 980 },
            { run: "18", window: "+48", start: 1125, end: 1160 },
            { run: "21", window: "+48", start: 1305, end: 1340 },
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
            { run: "00", window: "+72", start: 285, end: 445 },
            { run: "06", window: "+72", start: 645, end: 805 },
            { run: "12", window: "+72", start: 1005, end: 1165 },
            { run: "18", window: "+72", start: 1365, end: 85 },
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