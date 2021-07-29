import React, {Component} from 'react';

class EndGame extends Component {
  state = {
    tied: "You guys tied",
    playerWin: "You win" + this.props.winner + "!!"
  };

  handleClick = () => {
    this.props.endgame(false);
  };

  render() {
    const { winner } = this.state;
    const { tied, playerWin } = this.props;
    return (
      <div className="wrapper">
        <div className="screen">
          <p> {winner === "Tied" ? tied : playerWin} </p>
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Wanna try again?
          </button>
        </div>
      </div>
    );
  }
}

export default EndGame;