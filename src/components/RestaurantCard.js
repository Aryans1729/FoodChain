import { IMG_CDN_URL } from "../../utils/constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  const imageUrl = cloudinaryImageId
    ? "https://media-assets.swiggy.com/swiggy/" + cloudinaryImageId
    : "https://via.placeholder.com/508x320?text=Image+Unavailable";

  // Convert rating to float (if possible)
  const rating = parseFloat(avgRatingString);
  const ratingStyle =
    avgRatingString === "--"
      ? { backgroundColor: "white", color: "black" }
      : rating < 4
      ? { backgroundColor: "var(--light-red)", color: "white" }
      : { backgroundColor: "green", color: "white" };

  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <h5>{cuisines?.join(", ")}</h5>
      <h5>{areaName}</h5>
      <div className="card-details" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span style={{ ...ratingStyle, padding: "2px 6px", borderRadius: "4px" }}>
          <i className="fa-solid fa-star" style={{ marginRight: "4px" }}></i>
          {avgRatingString}
        </span>
        <span>•</span>
        <span>{sla?.lastMileTravelString ?? "2.0 km"}</span>
        <span>•</span>
        <span>{costForTwo ?? "₹200 for two"}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
