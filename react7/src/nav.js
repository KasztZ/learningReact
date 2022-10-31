import React from "react";

export default function Navbar() {
    return(
        <div>
            <nav>
                <img src="./images/airbnbLogo.png" alt="airbnbLogo" className="airbnb--logo"></img>
            </nav>
            <img src="./images/groupPicture.png" alt="various pictures of people" className="airbnb--gridPicture"></img>
            <h1 className="airbnb--title">Online Experiences</h1>
            <h2 className="airbnb--subTitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
        </div>
    )
}