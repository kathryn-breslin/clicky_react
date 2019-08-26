import React from "react";
import "./Card.css";

interface IProps { 
    name: string;
    id: any;
    image: string;
    handleClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const Card = ({ name, id, image, handleClick }: IProps) => {
  return (
    <div className="card">
      <img 
      alt={name} 
      src={image}
      onClick={() => handleClick(id)} className="shuffle"
      ></img>

    </div>
  );
}

export default Card;
