import { createContext } from "react";

const Usercontaxt = createContext({
  initialName: "Ansari",
  setIsLoggedIn: () => {},
});

export default Usercontaxt;
