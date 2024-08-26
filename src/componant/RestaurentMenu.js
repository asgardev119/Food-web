import { useEffect, useState } from "react";
import "../styles/resmenulist.css";
import { Link, useParams } from "react-router-dom";
import { menuApi } from "../mockData";
import { OfferSlider } from "./OfferSlider";
import { Categories } from "./Categories";
import { Effect } from "./Effect";

export const RestaurentMenu = () => {
  const [menuList, setMenuList] = useState();
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(menuApi + resId);
    const json = await data.json();
    setMenuList(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (!menuList) {
    return (
      <div>
        <Effect />
      </div>
    );
  }

  const {
    name,
    id,
    city,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    sla,
    feeDetails,
  } = menuList?.cards[2]?.card?.card?.info || {};

  const categoriesList =
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      // most error -> cards[4] || cards[5]
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  const { offers } =
    menuList?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="menu-Container">
      <h3>{name}</h3>
      <div className="shopInfo">
        <div className="shopdata">
          <p>
            ❇️{avgRating} ({totalRatingsString})•{costForTwoMessage}
          </p>
          <Link to="#">{cuisines.join(",")}</Link>
          <p>Outlet {city} ▾</p>
          <p>{sla.slaString} </p>

          <hr></hr>
          <p id="sub">
            🚴 <span dangerouslySetInnerHTML={{ __html: feeDetails.message }} />
          </p>
        </div>
      </div>
      <h3> Deals for you</h3>
      <OfferSlider offers={offers} />
      {categoriesList.map((category, i) => (
        <Categories
          data={category?.card?.card}
          key={i}
         
        />
      ))}
    </div>
  );
};
