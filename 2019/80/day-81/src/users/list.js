import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { WebAPI } from '../api/index';
import { UserUpdated, UserViewed } from './message';

@inject(WebAPI, EventAggregator)

export class UserList {
  constructor(api, ea) {
    this.api = api;
    this.users = [];

    ea.subscribe(UserViewed, msg => this.select(msg.user));
    ea.subscribe(UserUpdated, msg => {
      let id = msg.user.id;
      let found = this.users.find(x => x.id === id);
      Object.assign(found, msg.user);
    });
  }

  created() {
    this.api.getUserList().then(users => this.users = users);
  }

  select(user) {
    this.selectedId = user.id;
    return true;
  }
}
