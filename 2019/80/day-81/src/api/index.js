let latency = 200;
let id = 0;

function getId() {
  return ++id;
}

let users = [
  { id: getId(), name: 'Hemerson', email: 'hemerson@gmail.com' },
  { id: getId(), name: 'Descco', email: 'descco@gmail.com' },
  { id: getId(), name: 'Nerd', email: 'nerd@gmail.com' }
];

export class WebAPI {
  isRequesting = false;

  getUserList() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = users.map(item =>  {
          return {
            id: item.id,
            name: item.name,
            email: item.email
          };
        });
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getUserDetails(id) {
    this.isRequesting = true;

    return new Promise(resolve => {
      setTimeout(() => {
        let found = users.filter(item => item.id === +id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveUser(user) {
    this.isRequesting = true;

    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(user));
        let found = users.filter(x => x.id === +user.id)[0];

        if (found) {
          let index = users.indexOf(found);
          users[index] = instance;
        } else {
          instance.id = getId();
          users.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}
