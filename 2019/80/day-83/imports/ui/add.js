import React, { Component } from 'react';
import { Players } from '../api/players';

class Add extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const playerName = evt.target.playerName.value;
    evt.preventDefault();

    if (playerName) {
      evt.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="form-field" type="text" name="playerName" placeholder="Nome"/>
        <button className="form-submit">Adicionar Jogador</button>
      </form>
    );
  }
};

export default Add;
