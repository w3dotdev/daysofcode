const loginCommands = {
  login(username, pass) {
    return this
      .waitForElementVisible('@usernameInput', 5000)
      .setValue('@usernameInput', username)
      .setValue('@passInput', pass)
      .waitForElementVisible('@loginButton', 1000)
      .click('@loginButton')
      .pause(1000)
      .waitForElementVisible('@alert')
      .assert.containsText('@alert', 'Olá')
      .end();
  }
};

module.exports = {
  url: 'http://localhost:3000',
  commands: [loginCommands],
  elements: {
    usernameInput: {
      selector: 'input[type=text]'
    },
    passInput: {
      selector: 'input[name=password]'
    },
    loginButton: {
      selector: 'button[type=submit]'
    },
    alert: {
      selector: '.title'
    }
  }
};
