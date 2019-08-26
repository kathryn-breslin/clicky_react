import React, { Component } from "react";
import { Card } from "../components";
import seaCreatures from "../seaCreatures.json";

interface ICreatures{
    id: number;
    name: string;
    image: string;
    // counter: number, 
    // clicked: string
}

interface IState {
    seaCreatures: ICreatures[], 
    id: number, 
    name: string, 
    image: string;
    counter: number,
    clicked: string[]
}

class Home extends Component {
  state: IState = {
    seaCreatures: [], 
    id: 0, 
    name: "", 
    image: "",
    counter: 0, 
    clicked: []
  };

//   shuffle = (id: any) => {
//     const { seaCreatures, counter } = this.state;
//     seaCreatures.sort(() => Math.random() - 0.5);

//     this.setState({ counter: counter + 1})
//   }

  handleClick = (id: any) => {
      const { clicked, counter } = this.state;
      if (clicked.indexOf(id) === -1) {
          this.setState({ clicked: clicked.concat(id), counter: counter + 1})
      }
  }


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
