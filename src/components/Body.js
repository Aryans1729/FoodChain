import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
// import { FOODFIRE_API_URL } from "../../utils/constant"

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch("https://foodfire.onrender.com/api/restaurants?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
  
      // Loop through each card to find the one with restaurant data
      const cards = json?.data?.cards;
  
      if (!cards || !Array.isArray(cards)) {
        console.error("No cards found in response");
        return;
      }
  
      let restaurantList;
  
      for (let i = 0; i < cards.length; i++) {
        const potentialList =
          cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
        if (potentialList && Array.isArray(potentialList)) {
          restaurantList = potentialList;
          break;
        }
      }
  
      if (!restaurantList) {
        console.warn("Restaurant data not found in API response");
        return;
      }

  
      setRestaurantData(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }
  
  

  return (
    <div className="body">
      {/* Filter and Search container */}
      <div
        className="filter-search-container"
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = restaurantData.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
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
            flex: "1",
          }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-button"
          onClick={() => {
            const filtered = restaurantData.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
      <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
        <RestaurantCard {...restaurant.info} />
      </Link>
    ))
  ) : (
    <Shimmer />
  )}
</div>

    </div>
  );
};

export default Body;
