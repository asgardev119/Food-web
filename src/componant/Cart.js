import React from "react";
import { ItemList } from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { imagesApi } from "../mockData";
import "../styles/cart.css";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dishpatch = useDispatch();

  const handleClear = () => {
    dishpatch(clearCart());
  };

  return (
    <div className="rootCart">
      <h3>Cart</h3>
      <button onClick={handleClear}>clear cart</button>
      {cartItems.length == 0 ? (
        <h3>Cart is empty go to add items</h3>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};
