import React from "react";

export default function Content(props){
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"        
    }



    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./images/roll_images/${props.coverImg}`} alt={props.description} className="card--image"></img>
            <div className="card-stats">
                <img src="./images/roll_images/star.png" alt="star" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})·</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price} / person</span></p>
        </div>
    )
}