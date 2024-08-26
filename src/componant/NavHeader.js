import React from "react";
import "../styles/navheader.css";
import { imagesApi } from "../mockData";
import { Link } from "react-router-dom";

export const NavHeader = ({ navListItem }) => {
  const { title } = navListItem.card.card.header;
  const { info } = navListItem.card.card.imageGridCards;
  // console.log("info", info);
  return (
    <div className="navHeaderRoot">
      <h2>{title}</h2>
      <div className="rootNav">
        {info.map((obj) => (
          <div className="navBox">
            <Link to={"restaurentmenu/" + obj.id}>
              <img className="navProduct" src={imagesApi + obj.imageId}></img>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
