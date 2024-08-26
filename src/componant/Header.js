import "../styles/header.css";
import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoMdHelpBuoy } from "react-icons/io";
import { BsMinecart } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Usercontaxt from "../utils/Usercontax";
import { useSelector } from "react-redux";
import { Cart } from "./Cart";

const Header = ({ isLoggedIn }) => {
  const [showComponent, setShowComponent] = useState(false);

  const handleMouseOver = () => {
    setShowComponent(true);
  };

  const handleMouseOut = () => {
    setShowComponent(false);
  };

  // const user = useContext(Usercontaxt);

  const cartItem = useSelector((store) => store.cart.items);

  const [storedUser, setStoredUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userSignIn");
    if (storedUser) {
      setStoredUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="headerRoot">
      <header className="header">
        <div className="logo">
          <NavLink to="/">Food </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/about">About Us </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                {" "}
                <IoMdHelpBuoy />
                Help{" "}
              </NavLink>
            </li>

            <li>
              <NavLink to="/search">
                {" "}
                <FiSearch />
                Search
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <BsMinecart />
                <small> {cartItem.length} </small>Cart
              </NavLink>
            </li>

            {showComponent && (
              <div className="subCart">
                <Cart />
              </div>
            )}

            <li>
              {isLoggedIn ? (
                <NavLink to="/userprofile">
                  {storedUser && storedUser.name}
                </NavLink>
              ) : (
                <NavLink to="/signin">
                  <FiUser /> Sign in
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
