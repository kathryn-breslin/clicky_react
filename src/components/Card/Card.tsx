import React from "react";
import "./Card.css";

interface IProps { 
    name: string;
    id: any;
    image: string;
    shuffle: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const Card = ({ name, id, image, shuffle }: IProps) => {
  return (
    <div className="card">
      <img 
      alt={name} 
      src={image}
      onClick={() => shuffle(id)} className="shuffle"
      ></img>

    </div>
  );
}

export default Card;
