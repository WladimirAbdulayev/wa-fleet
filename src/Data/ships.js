exports.Ships = [
  {
    _id: {
      $oid: "1",
    },
    shipName: "BBC Germany",
    shipType: "Project Cargo Carrier",
    shipClass: "Region",
    flag: "Germany",
    techStaff: [
      {
        id: 1,
        position: "Fleet Manager",
        lastName: "Hartmann",
        firstName: "Bernd",
        phone: "+49 173 007 224 234",
      },
      {
        id: 2,
        position: "Tech. Superintendent",
        lastName: "Tammen",
        firstName: "Kai",
        phone: "+49 173 547 832 654",
      },
      {
        id: 3,
        position: "Nautical Superintendent",
        lastName: "Böckenkröger",
        firstName: "Andreas",
        phone: "+49 174 587 364 914",
      },
    ],
    position: [54.329, 6.789],
    voyage: [
      [54.26, 7.21],
      [57.13, 8.13],
      [57.77, 9.73],
      [57.91, 10.72],
      [57.43, 11.27],
      [57.15, 11.51],
      [56.47, 11.2],
      [56.1, 10.88],
      [56.07, 10.56],
      [56.15, 10.22],
      [55.78, 10.44],
      [55.62, 10.8],
      [55.07, 11.14],
      [54.59, 10.79],
      [54.58, 11.3],
      [54.24, 12.16],
      [54.62, 12.7],
      [54.97, 14.48],
      [54.89, 15.31],
      [57.82, 21.27],
      [58.71, 21.84],
      [59.06, 21.93],
      [59.37, 23.36],
      [59.49, 24.21],
      [59.46, 24.7],
    ],
    positionLandMarkers: [
      [53.9, 9.9937],
      [55.63, 8.25],
      [57.58, 10.33],
      [56.24, 10.12],
      [54.21, 12.25],
      [54.21, 12.25],
      [59.46, 24.7],
    ],
    reise: [
      { id: 1, port: "Bremerhaven", operation: "L", days: 3 },
      { id: 2, port: "Aarhus", operation: "S", days: 2 },
      {
        id: 3,
        port: "Aarhus",
        operation: "O",
        days: 2,
        agent: {
          company: "Jutlandia",
          pic: "Sven Erik Kristiansen",
          phone: "+45 75 13 60 22",
          email: "ops@jut.dk",
        },
      },
      { id: 4, port: "Rostock", operation: "D", days: 4 },
      { id: 5, port: "Tallinn", operation: "L", days: 1 },
    ],
  },
  {
    _id: {
      $oid: "2",
    },
    shipName: "BBC Ostfriesland",
    shipType: "Premium Project Cargo Carrier",
    shipClass: "Russia",
    flag: "Antigua&Barbuda",
    position: [43.44, 8.87],
    voyage: [
      [43.25, 9.57, "L"],
      [42.44, 9.92],
      [41.72, 9.83],
      [40.95, 10.01],
      [39.06, 9.87],
      [38.84, 9.52, "S"],
      [39.19, 9.1],
      [38.99, 9.1],
      [38.75, 8.75],
      [37.63, 5.3],
      [37.28, 4.0],
      [36.78, 3.07, "D"],
      [36.92, 2.93],
      [36.35, -0.01],
      [35.71, -0.65],
      [35.84, -0.91],
      [35.9, -5.3],
      [35.96, -5.38],
      [35.94, -6.16],
      [36.29, -6.36],
      [36.53, -6.28],
    ],
    reise: [
      { id: 1, port: "Livorno (IT)", operation: "L", days: 3 },
      { id: 2, port: "Gibraltar (UK)", operation: "T", days: 2 },
      { id: 3, port: "Lake Charles (US)", operation: "D", days: 1 },
    ],
  },
  {
    _id: {
      $oid: "3",
    },
    shipName: "BBC Coral",
    shipType: "Premium Project Cargo Carrier",
    shipClass: "Stone",
    flag: "Gibraltar",
    __v: 0,
    position: [57.12, -0.83],
    voyage: [
      [57.14, -2.08, "L"],
      [57.08, -1.8],
      [56.48, -1.82],
      [56.14, -1.4],
      [55.56, -1.07],
      [55.23, -1.35],
      [55.1, -1.42],
      [54.97, -1.63],
      [55.06, -1.46],
      [54.96, -0.99],
      [54.96, -0.82],
      [54.2, 0.3],
      [53.51, 0.36],
      [53.05, 1.71],
      [52.34, 3.09],
      [51.88, 3.34],
      [51.49, 3.32],
      [51.42, 3.58],
      [51.38, 3.69],
      [51.48, 3.38],
      [51.18, 2.26, "O"],
      [50.96, 1.87],
      [51.01, 1.75],
      [50.88, 1.44],
      [50.23, 0.66],
      [49.69, -0.12, "S"],
      [49.55, -0.1],
      [49.5, 0.1],
      [49.61, -1.14],
      [49.83, -1.33, "C"],
      [49.88, -2.09],
      [49.8, -2.79],
      [48.86, -4.81],
      [48.65, -5.21],
      [48.51, -5.36, "W"],
      [47.32, -4.93],
      [46.64, -2.93],
      [46.27, -1.6],
      [46.24, -1.31, "T"],
      [46.16, -1.2],
      [46.1, -1.26],
      [46.09, -1.49],
      [45.0, -1.64],
      [43.57, -2.54],
      [43.55, -2.79],
      [43.45, -3.03],
      [43.39, -3.06],
      [43.32, -2.99, "D"],
    ],
    reise: [
      { id: 1, port: "Haugesund (NO)", operation: "L", days: 3 },
      { id: 2, port: "Panama", operation: "L", days: 2 },
      { id: 3, port: "Houston", operation: "D", days: 1 },
      { id: 4, port: "Houston", operation: "L", days: 4 },
      { id: 5, port: "Houston", operation: "B", days: 1 },
    ],
  },
  {
    _id: {
      $oid: "4",
    },
    shipName: "Wybelsum",
    shipType: "Container Carrier",
    shipClass: "Island",
    flag: "Madeira",
    techStaff: [
      {
        id: 1,
        position: "Fleet Manager",
        lastName: "Hartmann",
        firstName: "Bernd",
        phone: "+49 173 007 224 234",
      },
      {
        id: 2,
        position: "Tech. Superintendent",
        lastName: "Tieben",
        firstName: "Gerd",
        phone: "+49 173 547 832 654",
      },
      {
        id: 3,
        position: "Nautical Superintendent",
        lastName: "Gels",
        firstName: "Tobias",
        phone: "+49 174 587 364 914",
      },
    ],
    position: [55.752, 18.566],
    voyage: [
      [55.752, 18.566],
      [57.18, 17.62],
      [58.87, 18.9],
      [59.97, 25.47],
      [59.98, 29.66],
    ],
    reise: [
      { id: 1, port: "Calais (FR)", operation: "L", days: 3 },
      { id: 2, port: "Zeebrugge (BE)", operation: "T", days: 2 },
      { id: 3, port: "Houston", operation: "D", days: 1 },
      { id: 4, port: "Houston", operation: "L", days: 4 },
      { id: 5, port: "Houston", operation: "D", days: 1 },
    ],
  },

  {
    _id: {
      $oid: "5",
    },
    shipName: "BBC Citrine",
    shipType: "Premium Project Cargo Carrier",
    shipClass: "Stone",
    flag: "Gibraltar",
    __v: 0,
    position: [32.05, -81.06],
    voyage: [
      [31.37, -80.29],
      [31.73, -80.71],
      [30.43, -80.73],
      [26.98, -79.41],
      [25.2, -79.72],
      [24.19, -81.47],
      [24.23, -83.39],
      [28.42, -85.03],
      [29.75, -88.13],
      [29.95, -89.8],
      [29.52, -89.12],
      [28.81, -88.86],
      [25.56, -94.48],
      [19.23, -96.2],
      [22.31, -87.85],
      [21.78, -86.26],
      [20.96, -85.61],
      [10.4, -75.54],
      [9.94, -78.66],
      [9.6, -79.8],
      [9.36, -79.93],
      [8.99, -79.54],
      [6.89, -78.1],
      [3.61, -78.62],
      [1.97, -79.41],
      [0.97, -79.65],
    ],
    reise: [
      { id: 1, port: "Savanna (US)", operation: "L", days: 3 },
      { id: 2, port: "New Orlean", operation: "S", days: 2 },
      { id: 3, port: "Cartagena", operation: "L", days: 1 },
      { id: 4, port: "Panama", operation: "B", days: 4 },
      { id: 5, port: "Esmeraldas", operation: "D", days: 1 },
    ],
  },
  {
    _id: {
      $oid: "6",
    },
    shipName: "BBC Mont Blanc",
    shipType: "Premium Project Cargo Carrier",
    shipClass: "Mountain",
    flag: "Antigua&Barbuda",
    __v: 0,
    position: [55.78, -1.032],
    voyage: [
      [53.98, 7.7],
      [57.02, 7.67],
      [57.86, 9.8],
      [57.89, 10.8],
      [57.31, 11.32],
      [56.02, 10.8],
      [55.2, 11.09],
      [54.65, 10.8],
      [54.32, 11.99],
    ],
    reise: [
      { id: 1, port: "Bremerhaven (DE)", operation: "L", days: 3 },
      { id: 2, port: "Aarhus (DK)", operation: "T", days: 2 },
      { id: 3, port: "Kiel (DE)", operation: "D", days: 1 },
      { id: 4, port: "Rostock (DE)", operation: "L", days: 4 },
      { id: 5, port: "Houston", operation: "D", days: 1 },
    ],
  },
  {
    _id: {
      $oid: "7",
    },
    shipName: "BBC Kibo",
    shipType: "Premium Project Cargo Carrier",
    shipClass: "Mountain",
    flag: "Germany",
    __v: 0,
    position: [51.48, -8.04],
    voyage: [
      [51.48, -8.04],
      [52.3, 3.8],
      [52.2, 3.7],
      [51.04, 1.45],
      [25.76, -80.19],
      [29.76, -95.37],
      [30.18, -93.297],
    ],
    reise: [
      { id: 1, port: "Tyne (UK)", operation: "L", days: 3 },
      { id: 2, port: "Panama", operation: "T", days: 2 },
      { id: 3, port: "Houston", operation: "D", days: 1 },
      { id: 4, port: "Houston", operation: "L", days: 4 },
      { id: 5, port: "Houston", operation: "D", days: 1 },
    ],
  },
  {
    _id: {
      $oid: "8",
    },
    shipName: "BBC New York",
    shipType: "Project Cargo Carrier",
    shipClass: "Mountain",
    flag: "Gibraltar",
    __v: 0,
    position: [50.5, -1.4043509],
    voyage: [
      [50, -1.4],
      [48.38, -6.24],
      [45.9, -2.55],
      [43.75, -9.47],
      [43.14, -10.47],
      [38.69, -10.56],
      [36.6, -9.22],
      [35.75, -7.68],
      [35.89, -5.19],
      [36.95, 3.12],
    ],
    reise: [
      { id: 1, port: "France", operation: "L", days: 3 },
      { id: 2, port: "La Coruna", operation: "T", days: 2 },
      { id: 3, port: "Houston", operation: "D", days: 1 },
      { id: 4, port: "Grbraltar", operation: "L", days: 4 },
      { id: 5, port: "Algier", operation: "D", days: 1 },
    ],
  },
  {
    _id: {
      $oid: "9",
    },
    shipName: "BBC London",
    shipType: "Multi-Purpose Cargo Carrier",
    shipClass: "L-City",
    flag: "UK",
    __v: 0,
    position: [45.06, -6.24],
    voyage: [
      [45.06, -6.24],
      [52.3, 3.8],
      [52.2, 3.7],
      [51.04, 1.45],
      [25.76, -80.19],
      [29.76, -95.37],
      [30.18, -93.297],
    ],
    reise: [
      { id: 1, port: "Bilbao (ES)", operation: "L", days: 3 },
      { id: 2, port: "Panama", operation: "T", days: 2 },
      { id: 3, port: "Houston", operation: "D", days: 1 },
      { id: 4, port: "Houston", operation: "L", days: 4 },
      { id: 5, port: "Houston", operation: "D", days: 1 },
      { id: 6, port: "Houston", operation: "B", days: 2 },
      { id: 7, port: "Houston", operation: "B", days: 3 },
      { id: 8, port: "Houston", operation: "D", days: 1 },
      { id: 9, port: "Houston", operation: "D", days: 4 },
    ],
  },
];
