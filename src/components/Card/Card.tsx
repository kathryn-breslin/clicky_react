import React from "react";
import "./Card.css";

function Card(props: {
  name: string | undefined;
  id: number;
  image: string | undefined;
}) {
  return (
    <div className="card">
      <img alt={props.name} src={props.image}></img>
    </div>
  );
}

export default Card;
