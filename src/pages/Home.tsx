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
  clicked: string[];
}

class Home extends Component {
  state: IState = {
    seaCreatures,
    counter: 0,
    clicked: []
  };

  shuffle = (id: any) => {
    const { seaCreatures, counter } = this.state;
    seaCreatures.sort(() => Math.random() - 0.5);

    console.log("ID: " + id);

    this.setState({ counter: counter + 1 });
  };

  handleClick = (id: any) => {
    const { clicked } = this.state;
    if (clicked.indexOf(id)) {
      this.setState({ clicked: clicked.concat(id) });
    } else {
      console.log("redo");
    }
  };

  //   scoring = () => {
  //       const { counter, totalScore, id } = this.state;
  //       const score = counter + 1;

  //       this.setState({ totalScore: score });

  //       if (score >= totalScore){
  //         console.log(id)
  //         this.setState({totalScore: score})
  //       }
  //       else if (score === 12) {
  //           console.log("You win!")
  //       }
  //       this.shuffle(id);
  //   }

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
