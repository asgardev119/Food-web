import "../styles/header.css";
import React, { useState } from "react";
import { AiOutlineBars, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Usercontaxt from "../utils/Usercontax";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const navigate = useNavigate();

  const user = useContext(Usercontaxt);
  const cartItem = useSelector((store) => store.cart.items);

  const onChange = () => {
    if (btnName == "Login") {
      navigate("/login");
      setBtnName("Logout");
    } else {
      setBtnName("Login");
      navigate("/");
    }
  };

  return (
    <div className="headerRoot">
      <header className="header">
        <div className="logo">
          {" "}
          <NavLink to="/">Foodies </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/about">About Us </NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact </NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart({cartItem.length}) </NavLink>
            </li>
            <li>
              <NavLink to="#">{user.initialName} </NavLink>
            </li>
          </ul>
          <button onClick={onChange}>{btnName}</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
