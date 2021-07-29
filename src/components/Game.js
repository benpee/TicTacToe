import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  state = {
    player1: true,
    player2: false,
    check: true
  };

  handleTurn = (firstPlayer, firstBoolean, secondPlayer, secondBoolean) => {
    this.setState({
      [firstPlayer]: firstBoolean,
      [secondPlayer]: secondBoolean
    });
  };

  render() {
    const { player1, player2 } = this.state;
    const { handleTurn } = this;
    const {
      userName1,
      userName2,
      endgame,
      handleScore
    } = this.props;
    return (
      <div className="game">
        <p>
          It's {player1 ? userName1 : userName2}'s turn
        </p>
        <Board
          userName1={userName1}
          userName2={userName2}
          endgame={endgame}
          handleScore={handleScore}
          turn={handleTurn}
        />
      </div>
    );
  }
}

export default Game;