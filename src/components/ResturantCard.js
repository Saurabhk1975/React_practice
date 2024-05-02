import { IMG_CDN_URL } from "../utils/constants";

const ResturantCard = (probs) => {
  const { resdata } = probs;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resdata?.info;
  return (
    <div
      className="m-4 p-4 w-[235px] h-[320px] flex flex-col justify-between rounded-xl bg-gray-100 hover:bg-gray-200"
      data-testid="res-card"
    >
      <img
        className="rounded-lg h-32 object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="flex flex-col justify-between">
        <div className="lineOne">
          <h4 className="font-bold py-2 text-lg truncate">{name}</h4>
          <h3>{avgRating}🌟</h3>
        </div>
        <div className="lineOne">
          <h4 className="truncate">{cuisines.join(", ")}</h4>
          <h5>₹{costForTwo} For two</h5>
        </div>
        <div className="lineOne">
          <h4 className="truncate">{resdata.info.locality}</h4>
          <h5>{resdata.info.sla.slaString} Minutes</h5>
        </div>
      </div>
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default ResturantCard;
