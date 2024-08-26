import React from "react";
import "../styles/navheader.css";
import Card from "./Card";
import { Link } from "react-router-dom";

export const NearResturant = ({ nearRestaurent }) => {
  const { title } = nearRestaurent.card.card.header;
  const { restaurants } =
    nearRestaurent?.card?.card?.gridElements?.infoWithStyle;
  // console.log(restaurants);
  return (
    <div className="navHeaderRoot">
      <h2>{title}</h2>
      <div className="rootNav">
        {restaurants.map((obj, i) => (
          <div >
            <Link to={"restaurentmenu/" + obj.info.id}>
              <Card obj={obj} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
