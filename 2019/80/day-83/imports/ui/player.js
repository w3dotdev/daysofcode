import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Players } from '../api/players';

class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired
  }

  render() {
    const itemClassName = `item item--position${this.props.player.rank}`;

    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player-name">{this.props.player.name}</h3>
            <p className="player-stats">
              {this.props.player.position}º lugar - {this.props.player.score} ponto{this.props.player.score === 1 ? '' :  's'}
            </p>
          </div>
          <div className="player-actions">
            <button className="player-button" onClick={() => {
              Players.update(this.props.player._id, {$inc: { score: -1 }});
            }}>-1</button>
            <button className="player-button" onClick={() => {
              Players.update(this.props.player._id, {$inc: { score: 1 }});
            }}>+1</button>
            <button className="player-button" onClick={() => Players.remove(this.props.player._id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Player;
