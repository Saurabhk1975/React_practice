import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

const Body = () => {
  // Local State Variable (useState Hooks)
  const [resturantList, setResturantList] = useState([]);
  const [filterResturantList, setfilterResturantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Use Effevt Hookes

  useEffect(() => {
    fetchData();
  }, []);

  // API call
  // const fectchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&collection=83649&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();
  //   setResturantList(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setfilterResturantList(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&collection=83649&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResturantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterResturantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const len = resturantList.length;
  if (len === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search ">
          {/* Taking input through state variable and re- render each time when key pressed */}
          <input
            type="text"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredResturant = resturantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterResturantList(filteredResturant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturantList.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList.length);
            setfilterResturantList(filteredList);
          }}
        >
          Filter Resturant
        </button>
      </div>
      <div className="res-conatiner">
        {filterResturantList.map((resturant) => (
          <ResturantCard key={resturant.info.id} resdata={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
