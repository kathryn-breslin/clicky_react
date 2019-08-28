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
  currentScore: number;
  clicked: string[];
}

class Home extends Component {
  state: IState = {
    seaCreatures,
    counter: 0,
    currentScore: 0,
    clicked: []
  };

  //Shuffle cards
  shuffle = (id: any) => {
    const { seaCreatures } = this.state;
    seaCreatures.sort(() => Math.random() - 0.5);
    // this.setState({ counter: counter + 1 });
    this.handleClick(id);
  };

  //Click counter
  handleClick = (id: any) => {
    const { clicked } = this.state;

    if (clicked.indexOf(id)) {
      this.setState({ clicked: clicked.concat(id) });
      this.calculateScore();
    }
    else if (clicked.includes(id)) {
        alert("You lose!")
    }
  };

  calculateScore = () => {
    const { counter, currentScore } = this.state;
    const score = counter + 1;

    if (score >= currentScore) {
      this.setState({ currentScore: score });
    }
    else if (score === 12) {
        this.setState({ currentScore: score})
        console.log("You win!")
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>{this.state.counter}</h1>
        </div>
        {seaCreatures.map(creature => (
          <div className="row">
            <div className="col-12">
              <Card
                id={creature.id}
                key={creature.id}
                image={creature.image}
                name={creature.name}
                shuffle={this.shuffle}
                // handleClick={this.handleClick}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
