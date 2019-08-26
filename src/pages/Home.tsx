import React, { Component } from "react";
import { Card } from "../components";
import seaCreatures from "../seaCreatures.json";

class Home extends Component {
  state = {
    seaCreatures, 
    counter: 0
  };

  shuffle = (id: any) => {
    const { seaCreatures, counter } = this.state;
    seaCreatures.sort(() => Math.random() - 0.5);

    this.setState({ counter: counter + 1})
    console.log("click");
  }
  render() {
    const { seaCreatures } = this.state;
    return (
      <div>
        {seaCreatures.map(creature => (
          <div className="row">
            <div className="col-12">
            {this.state.counter}
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
