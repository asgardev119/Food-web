import React, { useState } from "react";
import "../styles/offerslider.css";
import { imagesApi } from "../mockData";
import { Offerdesc } from "./Offerdesc";

export const OfferSlider = ({ offers }) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };
  // console.log(offers, "--------offers");
  return (
    <div className="coupens">
      {offers.map((obj, i) => {
        return (
          <div className="coupen" key={obj.info.id} onClick={handleChange}>
            <img src={imagesApi + obj.info.offerLogo} />
            <div className="texts">
              <p>{obj.info.header}</p>
              <p>{obj.info.couponCode}</p>
            </div>
          </div>
        );
      })}
      {open && (
        <div className="descpop">
          <Offerdesc setOpen={ setOpen} />
        </div>
      )}
    </div>
  );
};
