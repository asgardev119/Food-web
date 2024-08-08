import React from "react";
import "../styles/offerdesc.css";

export const Offerdesc = ({ setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="root">
      <h2 onClick={onClose}>×</h2>
      <header>
        <h3>Get 30% off</h3>
        <p>
          Use code TRYNEW & get 30% off on orders above ₹179. Maximum discount:
          ₹75.
        </p>
      </header>
      <hr />
      <h3>Terms and Conditions</h3>
      <ul>
        <li>Offer is valid only on select restaurants</li>
        <li>Coupon code can be applied only once in 2 hr on this restaurant</li>
        <li> Other T&Cs may apply</li>
        <li> Offer valid till Dec 31, 2024 11:59 PM</li>
      </ul>
    </div>
  );
};
