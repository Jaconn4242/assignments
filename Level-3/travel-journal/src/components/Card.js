import React from "react"

export default function Card(props) {
    return (
        <div className="Journal-entry">
        <div className="Card--container">
            <img src={`${props.item.mainImageUrl}`} className="Card--destination"></img>
            <div className="Card--information">
                <img src="https://img.icons8.com/color/48/000000/marker--v1.png" alt="Gatlingburg" className="Card--location-icon"></img>
                <span className="Card--location">{props.item.location}</span>
                <a href={`${props.item.googleMapsUrl}`} className="Card--link"> View on Google Maps</a>
                <h1 className="Card--title">{props.item.title}</h1>
                <h4 className="Card--dates">{`${props.item.startDate} - ${props.item.endDate}`}</h4>
                <p className="Card--description">{props.item.description}</p>
            </div>
        </div>
        </div>
    )
}