import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { WebAPI } from '../api/index';
import { areEqual } from '../util/index';
import { UserUpdated, UserViewed } from './message';

@inject(WebAPI, EventAggregator)

export class UserDetail {
  constructor(api, ea) {
    this.api = api;
    this.ea = ea;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;

    return this.api.getUserDetails(params.id).then(user => {
      this.user = user;
      this.routeConfig.navModel.setTitle(user.name);
      this.originalUser = JSON.parse(JSON.stringify(user));
      this.ea.publish(new UserViewed(this.user));
    });
  }

  get canSave() {
    return this.user.name && !this.api.isRequesting;
  }

  save() {
    this.api.saveUser(this.user).then(user => {
      this.user = user;
      this.routeConfig.navModel.setTitle(user.name);
      this.originalUser = JSON.parse(JSON.stringify(user));
      this.ea.publish(new UserUpdated(this.user));
    });
  }

  canDeactivate() {
    if (!areEqual(this.originalUser, this.user)) {
      // eslint-disable-next-line no-alert
      let result = confirm('As alterações ainda não foram salvas. Tem certeza que deseja sair?');

      if (!result) {
        this.ea.publish(new UserViewed(this.user));
      }

      return result;
    }

    return true;
  }
}
