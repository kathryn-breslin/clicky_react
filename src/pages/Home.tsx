import React, { Component } from "react";
import { Card } from "../components";
import seaCreatures from "../seaCreatures.json";

class Home extends Component {
  state = {
    seaCreatures
  };

  render() {
    const { seaCreatures } = this.state;
    return (
      <div>
        {seaCreatures.map(creature => (
          <div className="row">
            <div className="col-12">
              <Card
                id={creature.id}
                key={creature.id}
                image={creature.image}
                name={creature.name}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
