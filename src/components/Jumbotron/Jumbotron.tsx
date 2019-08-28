import React from "react";
import "./Jumbotron.css";
interface IProps {
    counter: number;
    totalScore: number
}

const Jumbotron = ({ counter, totalScore}: IProps) => {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container" id="displayContainer">
          <h1 className="display-4">Clicky Creatures</h1>
        </div>
        <div id="jumboElements"><p>clicks: {counter}</p>total score: {totalScore}</div>
      </div>
    )
}
  
export default Jumbotron;
