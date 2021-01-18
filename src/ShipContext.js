import { createContext } from "react";

// mocking application level state
const ShipContext=createContext(
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
    ],
    position: [54.329, 6.789],
    voyage: [
      [54.26, 7.21],
    ],
    positionLandMarkers: [
      [53.9, 9.9937],
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
  obj=>obj
);

export default ShipContext;