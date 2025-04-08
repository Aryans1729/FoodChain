
const RestaurantCard = ({ resData }) => {
    return (
      <div className="restaurant-card">
        <img className="res-logo" alt={resData.name} src={resData.image} />
        <h3>{resData.name}</h3>
        <p>{resData.cuisines.join(", ")}</p>
        <div className="rating">
          ⭐ {resData.rating} | ⏳ {resData.deliveryTime}
        </div>
      </div>
    );
  };
  
  export default RestaurantCard