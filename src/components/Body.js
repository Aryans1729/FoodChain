import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {
  const [restaurantData, setRestaurantData] = useState(restaurants );
  console.log(restaurantData)

  useEffect(() =>{
    console.log("UseEffect inside console")
  },[])



  return (
    <div className="body">
      {/* Filter button */}
      <div className="button">
        <button className="filter-button" onClick={() => {
          const filteredList = restaurantData.filter((res) => res.rating > 4.2)
          setRestaurantData(filteredList)
        }}>
          Top Rated Restaurants
        </button>
      </div>
      {/* Search bar section */}
      <div className="search">
        <input type="text" placeholder="Search restaurants..." />
      </div>
      {/* Restaurant cards container */}
      <div className="card-container">
        {restaurantData && restaurantData.length > 0 ? (
          restaurantData.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))
        ) : (
          <Shimmer/>
        )}
      </div>
    </div>
  );
};

export default Body  