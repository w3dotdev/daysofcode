// Aurelia is a modern, front-end JavaScript framework for building browser, mobile, and desktop applications.
// It focuses on aligning closely with web platform specifications, using convention over configuration, and having minimal framework intrusion.
//
// https://aurelia.io/
//
// npm install -g aurelia-cli
// au new
// (ESNext)
// au run --open
//
import { inject, PLATFORM } from 'aurelia-framework';
import { WebAPI } from './api/index';

@inject(WebAPI)
export class App {
  constructor(api) {
    this.api = api;
  }
  configureRouter(config, router) {
    config.title = 'Nerd Calistênico';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('users/no-selection'), title: 'Editar usuário'},
      { route: 'users/:id', moduleId: PLATFORM.moduleName('users/detail'), name: 'users' }
    ]);

    this.router = router;
  }
}
