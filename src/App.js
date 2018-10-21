import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
// import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import options from "./options.json";
// import "./App.css";

class App extends Component {
  // Setting this.state.options to the options json array
  state = {
    options,
    chosenArr: [],
    currentScore: 0,
    highScore: 0,
    message: "Click an Image to Start",
  };

  // function to shuffle array
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  selectOption = id => {

    // randomize options at start
    this.setState({ options: this.shuffle(this.state.options) });

    if (this.state.chosenArr.indexOf(id) === -1) {
      this.state.chosenArr.push(id);
      this.setState({
        chosenArr: this.state.chosenArr,
        currentScore: this.state.currentScore + 1,
        message: "Nice! Pick Again"
      });
    }

    else {
      this.setState({
        currentScore: 0,
        chosenArr: [],
        message: "Game Over"
      });

      if (this.state.currentScore > this.state.highScore) {
        this.setState({
          highScore: this.state.currentScore,
          message: "New High Score!"
        });
      }
    }
  };

  // Map over this.state.options and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container-fluid">
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />

        {/* <Jumbotron /> */}
        <div className="container">
          <div className="row">
            {this.state.options.map(options => (
              <FriendCard
                selectOption={this.selectOption}
                id={options.id}
                key={options.id}
                name={options.name}
                image={options.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
