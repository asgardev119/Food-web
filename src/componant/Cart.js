import React from "react";
import { ItemList } from "./ItemList";
import { useSelector } from "react-redux";
import { imagesApi } from "../mockData";
import "../styles/cart.css";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="rootCart">
      <h3>Cart</h3>
      <ItemList items={cartItems} />
    </div>
  );
};
