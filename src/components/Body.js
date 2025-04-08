import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurantData, setRestaurantData] = useState(restaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)
  console.log(restaurantData)

  useEffect(() => {
    console.log("UseEffect inside console")
  }, [])



  return (
    <div className="body">
    {/* Filter and Search container */}
    <div className="filter-search-container" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button
        className="filter-button"
        onClick={() => {
          const filteredList = restaurantData.filter((res) => res.rating > 4.2);
          setRestaurantData(filteredList);
        }}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        Top Rated Restaurants
      </button>
  
      <input
        type="text"
        placeholder="Search restaurants..."
        className="search-input"
        style={{
          padding: "10px",
          border: "2px solid green",
          borderRadius: "10px",
          outline: "none",
          flex: "1"
        }}
        onChange={(e) => setSearchText(e.target.value)}
      />
  
      <button
        className="search-button"
        onClick={() => {
          const filtered = restaurantData.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurants(filtered);
        }}
        style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  
    {/* Restaurant cards container */}
    <div className="card-container">
      {filteredRestaurants && filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))
      ) : (
        <Shimmer />
      )}
    </div>
  </div>
  
  );
};

export default Body  