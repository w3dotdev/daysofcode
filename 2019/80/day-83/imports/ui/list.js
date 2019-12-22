import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Player from './player';

class List extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  }

  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item-message">Adicione os jogadores</p>
        </div>
      );
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }

  render() {
    return (
      <>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </>
    );
  }
};

export default List;
