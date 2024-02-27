import { IMG_CDN_URL } from "../utils/constants";

const ResturantCard = (probs) => {
  const { resdata } = probs;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resdata?.data;
  return (
    <div className="rescard">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="lineOne">
        <h4>{name}</h4>
        <h3>{avgRating}🌟</h3>
      </div>
      <div className="lineOne">
        <h4>{cuisines.join(", ")}</h4>
        <h5>₹{costForTwo} For two</h5>
      </div>
      <div className="lineOne">
        <h4>{resdata.data.area}</h4>
        <h5>{deliveryTime} Minutes</h5>
      </div>
    </div>
  );
};

export default ResturantCard;
