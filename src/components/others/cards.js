import React from "react";
import "./card.css";

function Card(props){

    return(
        <div className="swiper-slide">
           <div className="testi-card">
                <img src={props.img} alt="" />
                <div className="content">
                    <h4>{props.nm}</h4>
                    <p>{props.txt}</p>
                </div>
                <div className="rating"><span>{props.rate}</span> <i class="fas fa-star"></i></div>
           </div>
        </div>
    )

}

export default Card;