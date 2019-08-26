import React, { Component } from "react";
import { Card } from "../components";
import seaCreatures from "../seaCreatures.json";

class Home extends Component {
  state = {
    seaCreatures, 
    counter: 0, 
    clicked: []
  };

  shuffle = (id: any) => {
    const { seaCreatures, counter } = this.state;
    seaCreatures.sort(() => Math.random() - 0.5);

    this.setState({ counter: counter + 1})
  }


  render() {
    const { seaCreatures } = this.state;
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
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
