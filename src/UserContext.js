import { createContext } from "react";

// mocking application level state
const UserContext=createContext([
    {
    userName: "Markus Müller",
    userRole: "admin",
    suffix: 1,
  },
  obj=>obj
]);

export default UserContext;