import React from "react"

export default function Card() {
    return (
        <div className="Journal-entry">
        <div className="Card--container">
            <img src="https://media.istockphoto.com/photos/sunrise-over-gatlinburg-skyline-picture-id956105542?b=1&k=20&m=956105542&s=170667a&w=0&h=8YTauJ7O4hW5gX3X59Go3kTiHTVWNm5z_DNHGCC1avA=" className="Card--destination"></img>
            <div className="Card--information">
                <img src="https://img.icons8.com/color/48/000000/marker--v1.png" alt="Gatlingburg" className="Card--location-icon"></img>
                <span className="Card--location">Tennessee</span>
                <a href="" className="Card--link"> View on Google Maps</a>
                <h1 className="Card--title">Gatlingburg</h1>
                <h4 className="Card--dates">12 Jan, 2021, 24 Jan, 2021</h4>
                <p className="Card--description">The quaint, resort-like village of Gatlinburg, nestled in the mountains of East Tennessee, is known for it's beautiful scenery, great shopping, as well as its colorful history. The small resort town, commonly referred to as the “Gateway to the Smoky Mountains,” lies at the foot of Mt.</p>
            </div>
        </div>
        </div>
    )
}