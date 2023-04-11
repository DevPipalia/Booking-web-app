import "./featured.css";
import React from "react";

function Featured(){
    return(
        <>
            <div className="featured">
                <div className="featured-item">
                    <img src="https://www.ourescapeclause.com/wp-content/uploads/2019/05/CinqueTerre-33.jpg" className="featured-img" />
                </div>
                <div className="featured-title f1">
                    <h1>Italy</h1>
                    <h2>200 properties</h2>
                </div>
                <div className="featured-item">
                    <img src="https://www.visa.com.au/dam/VCOM/regional/ap/images/travel-with-visa/paris/marquee-travel-paris-800x450.jpg" className="featured-img"/>
                </div>
                <div className="featured-title f2">
                    <h1>Paris</h1>
                    <h2>100 properties</h2>
                </div>
                <div className="featured-item">
                    <img src="https://travellersworldwide.com/wp-content/uploads/2022/12/Shutterstock_1094901527.jpg" className="featured-img"/>
                </div>
                <div className="featured-title f3">
                    <h1>Sydney</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </>
    )
}


export default Featured;