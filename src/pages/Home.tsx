import React, { Component } from "react";
import { Card } from "../components";
import seaCreatures from "../seaCreatures.json";

class Home extends Component {
  state = {
      seaCreatures
    }


  render() {
      const { seaCreatures } = this.state;
    return (
      <div>
        {seaCreatures.map(creature => (
            <Card
            id={creature.id}
            key={creature.id}
            image={creature.image}
            name={creature.name}
            />
        ))}
      </div>
    );
  }
}

export default Home;
