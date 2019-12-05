module.exports = {
  'Login': (client) => {
    const loginPage = client.page.loginPage();

    loginPage
      .navigate()
      .login(process.env.USERNAME, process.env.PASSWORD)

    client.end();
  }
};
