// Meteor is an ultra-simple environment for building modern web applications.
//
// curl https://install.meteor.com/ | sh
// meteor create day83 --react
// meteor add fourseven:scss@=3.10.1 (Sass and SCSS support)
// npm start
//
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players, calculatePlayerPositions } from './../imports/api/players';
import App from './../imports/ui';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, {sort: {score: -1}}).fetch();
    const positionedPlayers = calculatePlayerPositions(players);
    const title = 'Placar';

    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.querySelector('[data-js="app"]'));
  });
});
