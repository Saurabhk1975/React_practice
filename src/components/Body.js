import ResturantCard, { withPromtedLabel } from "./ResturantCard";
import { useEffect, useState, useContext } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import { UserContext } from "../utils/UserContext";

const Body = () => {
  // Local State Variable (useState Hooks)
  const [resturantList, setResturantList] = useState([]);
  const [filterResturantList, setfilterResturantList] = useState([]);

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useInternetStatus();

  const RestaurantCardPromoted = withPromtedLabel(ResturantCard);

  const { loginValue } = useContext(UserContext);

  const { loginUser, setUserName } = useContext(UserContext);

  // Use Effect Hookes

  useEffect(() => {
    fetchData();
  }, []);

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
  if (onlineStatus == false) {
    return (
      <h1>Heyy, I thik You are Lost , Please Check Your Internet Connection</h1>
    );
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search mx-4 my-2 p-4">
          {/* Taking input through state variable and re- render each time when key pressed */}
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-lg"
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
        <div className="search mx-4 my-2 p-4 flex items-center ">
          <button
            className="filter-btn px-4 py-2 bg-green-200 rounded-lg"
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
          <input
            type="text"
            className="border px-2 ml-5"
            value={loginUser}
            onChange={(e) => setUserName(e.target.value)}
          />
          <h1 className="px-4 font-bold">Welcome {loginUser} </h1>
        </div>
      </div>
      <div className=" flex flex-wrap">
        {filterResturantList.map((resturant) => (
          <Link key={resturant.info.id} to={"/restaurant/" + resturant.info.id}>
            {resturant.info.veg ? (
              <RestaurantCardPromoted resdata={resturant} />
            ) : (
              <ResturantCard resdata={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
