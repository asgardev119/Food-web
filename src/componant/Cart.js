import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { imagesApi } from "../mockData";
import "../styles/cart.css";
import { MdDelete } from "react-icons/md";
import { clearCart, deleteItem, updateQuantity } from "../utils/cartSlice";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  const handleRemove = (id) => {
    dispatch(deleteItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  useEffect(() => {
    var newTotalPrice = 0;
    cartItems.forEach((item) => {
      if (
        item.card.info.defaultPrice ||
        (item.card.info.price && item.quantity)
      ) {
        newTotalPrice +=
          item.card.info.defaultPrice / 100 ||
          (item.card.info.price / 100) * item.quantity;
      }
    });
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="cartContainer">
          <h2>CART</h2>

          {cartItems.map((item, index) => (
            <div key={index} className="rootCart">
              <div className="cartItems">
                <img src={`${imagesApi}${item.card.info.imageId}`} alt="item" />
                <div className="CartText">
                  <p>{item.card.info.name}</p>
                  <p>
                    ₹:
                    {item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100}
                  </p>
                </div>
              </div>
              <div className="Cartbtns">
                <button
                  onClick={() =>
                    handleQuantityChange(item.card.info.id, item.quantity - 1)
                  }
                >
                  <FiMinus />
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() =>
                    handleQuantityChange(item.card.info.id, item.quantity + 1)
                  }
                >
                  <IoMdAdd />
                </button>
              </div>
              <button onClick={() => handleRemove(item.card.info.id)}>
                <MdDelete />
              </button>
            </div>
          ))}
          <div className="bottomDiv">
            <button onClick={handleClear} className="clearBtn">
              CLEAR CART
            </button>
            <button className="clearBtn">BUY</button>
            <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      ) : (
        <h2 style={{textAlign:"center"}}>No items in cart</h2>
      )}
    </>
  );
};
