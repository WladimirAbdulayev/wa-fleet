exports.Crew = [
  {
    id: 1,
    firstName: "Scott",
    lastName: "Brookbanks",
    rank: "Master",
    nationality: "UK",
  },
  {
    id: 2,
    firstName: "David",
    lastName: "Schiller",
    rank: "Chief Officer",
    nationality: "Germany",
    skills: [
      {
        skill: "Dry-docking",
        level: 3,
        grade: "SD",
        desc:
          "Examplary service during multiple 2 x dry-dockings. Confident. Assertive. Negotiator.",
      },
      {
        skill: "Newbuilding",
        level: 2,
        grade: "SD",
        desc:
          "Excellent performance during sea-trial and delivery in Weihai Ship Yard",
      },
      {
        skill: "Heavy-lift ops",
        level: 4,
        grade: "MA",
        desc:
          "loading / discharging H/L Rolls-Royce (400 MT) Turbines with cranes in tandem",
      },
      {
        skill: "Crane driving",
        level: 5,
        grade: "DR",
        desc:
          "loading / discharging of all sorts of H/L cargoes upto (200 MT), also in tandem",
      },
    ],
    service: [
      {
        id: 1,
        sShipName: "BBC Germany",
        sRank: "Chief Officer",
        boc: "25.10.2020",
        eoc: "25.02.2021",
      },
      {
        id: 2,
        sShipName: "BBC New York",
        sRank: "Chief Officer",
        boc: "10.03.2020",
        eoc: "15.07.2020",
      },
      {
        id: 3,
        sShipName: "BBC Mont Blanc",
        sRank: "Chief Officer",
        boc: "14.07.2019",
        eoc: "05.12.2019",
      },
      {
        id: 4,
        sShipName: "BBC Coral",
        sRank: "2nd Officer",
        boc: "16.04.2019",
        eoc: "28.08.2019",
      },
      {
        id: 5,
        sShipName: "BBC Kibo",
        sRank: "2nd Officer",
        boc: "17.12.2018",
        eoc: "10.04.2019",
      },
      {
        id: 6,
        sShipName: "BBC Kibo",
        sRank: "3rd Officer",
        boc: "07.02.2018",
        eoc: "23.07.2018",
      },
      {
        id: 7,
        sShipName: "Wybelsum",
        sRank: "Ordinary Seaman",
        boc: "19.09.2017",
        eoc: "14.03.2018",
      },
      {
        id: 8,
        sShipName: "BBC Mont Blanc",
        sRank: "Deck Cadet",
        boc: "03.07.2016",
        eoc: "14.02.2017",
      },
    ],
  },
  {
    id: 3,
    firstName: "Igor",
    lastName: "Sokolov",
    rank: "2nd Officer",
    nationality: "Russia",
  },
  {
    id: 4,
    firstName: "Christian R.",
    lastName: "Sordilla",
    rank: "3rd Officer",
    nationality: "Philippines",
    skills: [
      {
        skill: "Dry-docking",
        level: 2,
        grade: "JD",
        desc:
          "Excellent perofrmance. Took care of dry-dpcking paperwork. Gained experience.",
      },
    ],
  },

  {
    id: 5,
    firstName: "Alexander",
    lastName: "Smirnov",
    rank: "Bosun",
    nationality: "Ukraine",
  },
  {
    id: 6,
    firstName: "Vladislav",
    lastName: "Irushkin",
    rank: "AB Seaman",
    nationality: "Russia",
    skills: [
      {
        id: 4,
        skill: "Officer of the watch",
        level: 3,
        desc:
          "Good practical and theoretical knowledge. Ready for promotion to Officer of the watch",
        grade: "DO",
      },
      {
        id: 1,
        skill: "Helmsman",
        level: 4,
        desc: "Good, reliableHelmsman. No limitations",
        grade: "DR",
      },
    ],
    service: [
      {
        id: 1,
        sShipName: "BBC New York",
        sRank: "A/B Seaman",
        boc: "25.10.2020",
        eoc: "25.02.2021",
      },
      {
        id: 2,
        sShipName: "BBC Ostfriesland",
        sRank: "Ordinary Seaman",
        boc: "10.03.2020",
        eoc: "15.07.2020",
      },
      {
        id: 3,
        sShipName: "BBC Germany",
        sRank: "Ordinary Seaman",
        boc: "14.07.2019",
        eoc: "05.12.2019",
      },
      {
        id: 4,
        sShipName: "BBC Citrine",
        sRank: "Cadet",
        boc: "16.04.2019",
        eoc: "28.08.2019",
      },
    ],
  },
  {
    id: 7,
    firstName: "Simon A.",
    lastName: "Barrido",
    rank: "AB Seaman",
    nationality: "Philippines",
    skills: [
      {
        id: 4,
        skill: "Officer of the watch",
        level: 3,
        desc:
          "Has required knowledge and potential for propmotion to Officer of the watch",
        grade: "DO",
      },
      {
        id: 1,
        skill: "Helmsman",
        level: 5,
        desc: "Top Level Helmsman. Accurate. Can train others",
        grade: "DR",
      },
      {
        id: 2,
        skill: "Crane driving",
        level: 5,
        desc:
          "loading / discharging of all sorts of H/L cargoes upto (200 MT), also in tandem",
        grade: "DR",
      },
      {
        id: 3,
        skill: "Welding",
        level: 3,
        desc:
          "Average level of el. welding. Capable to perform basic welding works with good quality",
        grade: "CS",
      },
    ],
    service: [
      {
        id: 1,
        sShipName: "BBC Germany",
        sRank: "A/B Seaman",
        boc: "25.10.2020",
        eoc: "25.02.2021",
      },
      {
        id: 2,
        sShipName: "BBC New York",
        sRank: "A/B Seaman",
        boc: "10.03.2020",
        eoc: "15.07.2020",
      },
      {
        id: 3,
        sShipName: "BBC Mont Blanc",
        sRank: "Ordinary Seaman",
        boc: "14.07.2019",
        eoc: "05.12.2019",
      },
      {
        id: 4,
        sShipName: "BBC Coral",
        sRank: "Cadet",
        boc: "16.04.2019",
        eoc: "28.08.2019",
      },
    ],
  },
  {
    id: 8,
    firstName: "Ivan",
    lastName: "Filatov",
    rank: "Ordinary Seaman",
    nationality: "Russia",
  },
  {
    id: 9,
    firstName: "Mariusz",
    lastName: "Polanski",
    rank: "Chief Engineer",
    nationality: "Poland",
  },
  {
    id: 10,
    firstName: "Yuriy",
    lastName: "Tarasov",
    rank: "2nd Engineer",
    nationality: "Ukraine",
  },
  {
    id: 11,
    firstName: "Jeneses",
    lastName: "Lariba",
    rank: "3rd Engineer",
    nationality: "Philippines",
  },
  {
    id: 12,
    firstName: "Kenneth",
    lastName: "Laurente",
    rank: "4th Engineer",
    nationality: "Philippines",
    skills: [
      {
        id: 1,
        skill: "ME Engines",
        level: 3,
        desc: "Collected operational experience of modern ME Engines",
        grade: "EO",
      },
      {
        id: 2,
        skill: "Overhaul of Main Engine",
        level: 4,
        desc:
          "Took active part and gained experience in overhauling of Main Engine.",
        grade: "ER",
      },
      {
        id: 3,
        skill: "Welding",
        level: 2,
        desc:
          "Basic level of el. and gas welding. Capable to perform basic welding works with acceptable quality",
        grade: "CS",
      },
    ],
    service: [
      {
        id: 1,
        sShipName: "BBC Germany",
        sRank: "4th Engineer",
        boc: "25.10.2020",
        eoc: "25.02.2021",
      },
      {
        id: 2,
        sShipName: "BBC New York",
        sRank: "J. Engineer",
        boc: "10.03.2020",
        eoc: "15.07.2020",
      },
      {
        id: 3,
        sShipName: "BBC Mont Blanc",
        sRank: "Motorman",
        boc: "14.07.2019",
        eoc: "05.12.2019",
      },
      {
        id: 4,
        sShipName: "BBC Coral",
        sRank: "Motorman",
        boc: "16.04.2019",
        eoc: "28.08.2019",
      },
      {
        id: 5,
        sShipName: "BBC Kibo",
        sRank: "Wiper",
        boc: "17.12.2018",
        eoc: "10.04.2019",
      },
      {
        id: 6,
        sShipName: "BBC Kibo",
        sRank: "Engine Cadet",
        boc: "07.02.2018",
        eoc: "23.07.2018",
      },
    ],
  },
  {
    id: 13,
    firstName: "Rogelio",
    lastName: "Manango",
    rank: "Motorman",
    nationality: "Philippines",
  },
  {
    id: 14,
    firstName: "Elton J.",
    lastName: "Vitalez",
    rank: "Engine Cadet",
    nationality: "Philippines",
  },
  {
    id: 15,
    firstName: "Stepan",
    lastName: "Mironov",
    rank: "Fitter",
    nationality: "Russia",
  },
];

// Orville Jed Manango

// Simon Aurelle Barrido
// Sergei Gagarin
// Christian Rhomie Sordilla
// Anton Brovkov
// Dmitry Smirnov
// Kenneth Phurps Laurente
// Roderick Bañares
// Sergiy Filatov
