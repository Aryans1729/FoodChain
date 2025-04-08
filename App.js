import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import restaurantData from "./utils/constant";




 
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body restaurantData={restaurantData} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
