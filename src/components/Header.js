import { useState } from "react";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn5.vectorstock.com/i/1000x1000/55/84/burger-or-hamburger-vintage-modern-style-logo-vector-44425584.jpg" />
            </div>
            <div className="nav-items">
                <ul> 
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{
                        console.log("hanji")
                        btnNameReact === "Login" ?
                        setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header