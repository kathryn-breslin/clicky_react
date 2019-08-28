import React, { Component } from "react";
import { Card } from "../components";
import seaCreatures from "../seaCreatures.json";

interface ICreatures {
  id: any;
  name: string;
  image: string;
}

interface IState {
  seaCreatures: ICreatures[];
  counter: number;
  totalScore: number;
  clicked: string[];
}

class Home extends Component {
  state: IState = {
    seaCreatures,
    counter: 0,
    totalScore: 0,
    clicked: []
  };

  //Shuffle cards
  shuffle = (id: any) => {
    const { seaCreatures } = this.state;
    seaCreatures.sort(() => Math.random() - 0.5);
  };

  //Click counter
  handleClick = (id: any) => {
    const { clicked } = this.state;

    if (clicked.indexOf(id)) {
      this.setState({ clicked: clicked.concat(id) });
      this.calculateScore(id);
      this.shuffle(id);
    }
    else if (clicked.includes(id)) {
        this.resetGame(id);
        console.log("Reset Game")
    }
  };

  calculateScore = (id: any) => {
    const { counter, totalScore } = this.state;
    let currentScore = counter + 1;
    this.setState({ counter: currentScore})
    console.log("Counter State: " + counter);
    
    if (currentScore >= totalScore) {
      this.setState({ totalScore: currentScore });
    }
    else if (currentScore === 12) {
        // this.setState({ currentScore: score })
        console.log("You win!")
    }
    this.shuffle(id);
  };

  resetGame = (id: any) => {
    this.setState({ counter: 0, clicked: [], currentScore: 0});
    this.shuffle(id);
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>{this.state.counter}</h1>
          <h1>{this.state.totalScore}</h1>

        </div>
        {seaCreatures.map(creature => (
          <div className="row">
            <div className="col-12">
              <Card
                id={creature.id}
                key={creature.id}
                image={creature.image}
                name={creature.name}
                // shuffle={this.shuffle}
                handleClick={this.handleClick}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
