import React, { useContext } from "react";
import Usercontaxt from "../utils/Usercontax";
import {  useNavigate } from "react-router-dom";
import "../styles/userprofile.css"

export const Userprofile = () => {

  const userLogout = useContext(Usercontaxt);
  const nevigate = useNavigate();

  const handleLogout = () => {
    userLogout.setIsLoggedIn(false);
    nevigate("/signup");
  };
  return (
    <div>
      <button
        className="userlogoutbtn"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
};
