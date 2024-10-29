class User {
  #password;
  constructor(username, password, age) {
    this.username = username;
    this.#password = password;
    this.age = age;
    this.loggedIn = false;
  }
  login(password) {
    if (this.#password === password) {
      this.loggedIn = true;
      return;
    }
    throw new Error('incorrect password ');
  }
  logout() {
    this.loggedIn = false;
  }
}

module.exports = User
