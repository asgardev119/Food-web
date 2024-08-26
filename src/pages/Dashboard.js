import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Card from "../componant/Card";
import { Effect } from "../componant/Effect";
import { Link } from "react-router-dom";
import { dashboardApi } from "../mockData";
import { NavHeader } from "../componant/NavHeader";
import { NearResturant } from "../componant/NearResturant";

export const Dashboard = () => {
  const [resData, setResData] = useState([]);
  const [navListItem, setNavListItem] = useState([]);
  const [nearRestaurent, setNearRestaurent] = useState([]);

  const fetchData = async () => {
    const data = await fetch(dashboardApi);
    const jsonvalue = await data.json();

    const resMockData =
      jsonvalue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const navheaderList = jsonvalue?.data?.cards[0];
    setNavListItem(navheaderList || []);

    const nearestTopRestaurent = jsonvalue?.data?.cards[1];
    setNearRestaurent(nearestTopRestaurent || []);
    setResData(resMockData || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resData.length === 0) return <Effect />;

  return (
    <>
      <NavHeader navListItem={navListItem} />
      <NearResturant nearRestaurent={nearRestaurent} />

      <div className="searchBar">
        <button
          className="btn"
          onClick={() => {
            const filterData = resData.filter(
              (obj) => obj.info.avgRating > 4.2
            );
            setResData(filterData);
          }}
        >
          Top Rated Shops
        </button>

        <button className="btn" onClick={fetchData}>
          All
        </button>
      </div>

      <div className="container">
        {resData.map((obj) => {
          return (
            <Link to={`/restaurentmenu/${obj.info.id}`}>
              <Card obj={obj} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
