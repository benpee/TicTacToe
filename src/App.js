import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Login from './components/Login';
import EndGame from './components/EndGame';
import './App.css';

class App extends Component {
  state = {
    ties: 0,
    userName1: "player1",
    userName2: "player2",
    player1: 0,
    player2: 0,
    showLogin: true,
    showEndGame: false,
    winner: ""
  };

  handleScore = player => {
    const { userName1, userName2 } = this.state;
    let winner;
    if (player === "player1") {
      return winner = userName1;
    } else if (player === "player2") {
      return winner === userName2;
    } else {
      return winner = "Tied";
    }
    this.setState({
      [player]: this.state[player] + 1,
      winner: winner
    });  
  };

  handleName = (player1, player2) => {
    this.setState({
      userName1: player1,
      userName2: player2,
      showLogin: false
    });
  };

  handleEndgame = input => {
    this.setState({ showEndGame: input });
  };

  render() {
    const {
      ties,
      winner,
      player1,
      player2,
      userName1,
      userName2,
      showLogin,
      showEndGame
    } = this.state;
    const {
      handleEndgame,
      handleName,
      handleScore
    } = this;
    return (
      <div className="App">
        {showEndGame ? (
          <EndGame
            endgame={handleEndgame}
            winner={winner}
          />
        ) : null}
        {showLogin ? (
          <Login names={handleName} />
        ) : null}
        <Navbar
          ties={ties}
          userName1={userName1}
          userName2={userName2}
	  player1={player1}
	  player2={player2}
        />
        <Game
	  userName1={userName1}
	  userName2={userName2}
	  endgame={handleEndgame}
	  handleScore={handleScore} 
	/>
      </div>

    );
  }
}

export default App;