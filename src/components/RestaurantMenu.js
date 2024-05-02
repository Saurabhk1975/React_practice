import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { MenuCategory } from "./MenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurant(resId);

  const [showAccordian, setAccordian] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold py-3 text-xl">{name}</h1>
      <p className="font-bold">{costForTwoMessage}</p>
      <p>{cuisines.join(", ")}</p>
      <h2 className="font-bold py-2 text-lg">Menu</h2>
      {/*Accordian*/}
      {categories.map((category, index) => (
        <MenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showAccordian={index === showAccordian ? true : false}
          setAccordian={() => {
            setAccordian(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
