﻿import React, { Component } from 'react';

class Login extends Component {
  state = {
    player1: "",
    player2: ""
  };
 
  handleChange = e => {
    let player = e.target.id;
    this.setState({ [player]: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    const { player1, player2 } = this.state;
    this.props.names(player1, player2);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="screen">
          <form>
           <div className="form-group">
             <label htmlFor="player1">Name Player1</label>
             <input
               type="name"
               id="player1"
               className="form-control"
               onChange={this.handleChage}
             />
 
             <label htmlFor="player2">Name Player2</label>
             <input 
               type="name"
               id="player2"
               className="form-control"
               onChange={this.handleChage}
             />
           </div>
           <button
             onClick={this.handleClick}
             className="btn btn-primary"
           >
             Submit
           </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;