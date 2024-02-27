import ResturantCard from "./ResturantCard";
import { ResList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable
  const [resturantList, setResturantList] = useState(ResList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturantList.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filteredList.length);
            setResturantList(filteredList);
          }}
        >
          Filter Resturant
        </button>
      </div>
      <div className="res-conatiner">
        {resturantList.map((resturant) => (
          <ResturantCard key={resturant.data.id} resdata={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
