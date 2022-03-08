import React from "react"

function Card(props) {
    return(
        <div className="Card">
            <h1>{props.spot.place}</h1>
            <h3>{`$${props.spot.price}`}</h3>
            <h5>{`Popular in the ${props.spot.timeToGo}`}</h5>
            <p className="BookNow">Book Now!</p>
            <img className="Card--image" src={`${props.spot.backgroundUrl}`}></img>
        </div>
    )
}

export default Card;