const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = { Downtown: [], "Train Station": [], Park: [] };
    this.registeredUsers = {};
  }
  registerUser(username, password, age) {
    if (this.registeredUsers.hasOwnProperty(username)) {
      throw new Error("already registered");
    }
    if (age < 18) {
      throw new Error("too young to register");
    }
    const newUser = new User(username, password, age);
    this.registeredUsers[username] = newUser;
    return this.registeredUsers[username];
  }

  loginUser(username, password) {
    const user = this.registerUser[username];
    if (user.login(password)) {
      console.log("user has been logged in");
    } else {
      throw new Error("no such user is logged in");
    }
  }
}

module.exports = ScooterApp;
