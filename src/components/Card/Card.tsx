import React from "react";
import "./Card.css";

function Card (props: { name: string | undefined; id: number; image: string | undefined; }) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}></img>
            </div>
        </div>
    )
}

export default Card;