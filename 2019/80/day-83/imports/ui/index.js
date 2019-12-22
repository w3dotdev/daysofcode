import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Add from './add';
import List from './list';

class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">{this.props.title}</h1>
        <div className="content">
          <List players={this.props.players}/>
          <Add/>
        </div>
      </div>
    );
  }
};

export default App;
