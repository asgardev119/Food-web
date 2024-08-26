import React, { useContext } from "react";
import "../styles/itemList.css";
import { imagesApi } from "../mockData";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Usercontaxt from "../utils/Usercontax";

export const ItemList = ({ items }) => {
  // const isLogged = useContext(Usercontaxt);

  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item, i) => (
        <div className="list" key={i}>
          <div className="infolist">
            <h2> {item.card.info.name}</h2>
            <h4>
              ₹:
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </h4>
            <div>
              <b style={{ color: "green" }}>
                {item.card.info.ratings.aggregatedRating.rating}{" "}
              </b>
              <b style={{ color: "green" }}>
                ( {item.card.info.ratings.aggregatedRating.ratingCount})
              </b>
            </div>

            <small style={{ color: "black", fontSize: "15px" }}>
              {item.card.info.description}
            </small>
          </div>

          <div className="imgbtn">
            <img src={imagesApi + item.card.info.imageId} alt="pic" />
            <button onClick={() => handleAdd(item)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};
