import React, { useContext } from "react";
import "../styles/card.css";
import { imagesApi } from "../mockData";
import Usercontaxt from "../utils/Usercontax";

const Card = ({ obj }) => {
  const {
    cloudinaryImageId,
    avgRating,
    name,
    cuisines,
    aggregatedDiscountInfoV3,
    sla,
  } = obj.info;

  const header = aggregatedDiscountInfoV3?.header || "";
  const subHeader = aggregatedDiscountInfoV3?.subHeader || "";

  const fullname = useContext(Usercontaxt);

  return (
    <div className="card">
      <img src={imagesApi + cloudinaryImageId}></img>
      <h5>
        {header} {subHeader}
      </h5>

      <h4>{name}</h4>

      <p>
        {avgRating > 4 ? `❇️${avgRating}` : `${avgRating}`} . {sla.slaString}
      </p>
      <p>{cuisines.join(" , ")}</p>
    </div>
  );
};

export default Card;
