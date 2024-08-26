import React, { useState } from "react";
import "../styles/categories.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ItemList } from "./ItemList";

export const Categories = ({ data}) => {
  const [open, setOpen] = useState(false);
  const [names, setName] = useState(true);

  const showList = () => {
    if (open == true) {
      setOpen(false);
      setName(true);
    } else {
      setOpen(true);
      setName(false);
    }
  };

  return (
    <div className="menulists">
      <div className="openlist" onClick={showList}>
        <h4>
          {data.title} ({data.itemCards.length})
        </h4>
        <button> {names ? " ▼" : " ▲"}</button>
      </div>

      {open && (
        <div>
          <ItemList items={data.itemCards}  />
        </div>
      )}
    </div>
  );
};
