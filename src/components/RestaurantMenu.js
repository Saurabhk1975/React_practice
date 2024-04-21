import React, { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=572870"
    );
    const json = await data.json();
    setResInfo(json);
  };

  // Render Shimmer if resInfo is null
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  // Destructure itemCards correctly
  const { itemCards } =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
      ?.card?.card?.categories || {};

  console.log(itemCards);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>{costForTwoMessage}</p>
      <p>{cuisines}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((item, index) => <li key={index}>{item.info.name}</li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
