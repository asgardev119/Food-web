import React, { useEffect, useState } from "react";
import { dashboardApi } from "../mockData";
import Card from "../componant/Card";
import { Link } from "react-router-dom";
import { ItemList } from "../componant/ItemList";
import { Effect } from "../componant/Effect";

export const SearchItem = () => {
  const [inputValue, setInputValue] = useState("");
  const [resData, setResData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    const data = await fetch(dashboardApi);
    const jsonvalue = await data.json();

    const resMockData =
      jsonvalue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResData(resMockData || []);
  };

  const handleSearch = () => {
    const filterData = resData.filter((obj) => {
      // obj.info.cuisines.toLowerCase().includes(inputValue.toLowerCase())
      const cuisines = obj.info.cuisines;
      if (Array.isArray(cuisines)) {
        return cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(inputValue.toLowerCase())
        );
      }
    });
    setFilteredData(filterData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="searchRoot">
      <div className="searchBar">
        <input
          id="input"
          placeholder="search..."
          value={inputValue}
          onChange={onHandleChange}
        />
        <button className="btn" onClick={handleSearch}>
          search
        </button>
      </div>
      <div className="filterdItem">
        {filteredData.map((obj) => {
          return (
            <Link to={`/restaurentmenu/${obj.info.id}`}>
              <Card obj={obj} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
