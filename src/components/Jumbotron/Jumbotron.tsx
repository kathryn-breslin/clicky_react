import React from "react";

interface IProps {
    counter: number;
    totalScore: number
}

const Jumbotron = ({ counter, totalScore}: IProps) => {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">{counter}</p>
          <p className="lead">{totalScore}</p>

        </div>
      </div>
    )
}
  
export default Jumbotron;
