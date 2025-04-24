import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
// import restaurantData from "./utils/constant";
import Error from "./src/components/Error";
import {
    createBrowserRouter, Outlet,  //React-router
    RouterProvider,
} from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantsMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />

            }, {
                path: "/about",
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }

        ],
        errorElement: <Error />
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />); //React-Router
