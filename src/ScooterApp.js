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
    const user = this.registeredUsers[username];
    if (user.login(password)) {     
      console.log("user has been logged in");
      return true;
    } else {
      throw new Error("Username or password is incorrect");
    }
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user) throw new Error("no such user is registered");
    user.logout();
    console.log("user is logged out")
    return true;
  }

  createScooter(station) {
    if (!this.stations.hasOwnProperty(station)){
      throw new Error('no such station');
    }
    const scooter = new Scooter(station);
    this.stations[station].push(scooter);
    console.log("created new scooter");
    return scooter;
  }
}

module.exports = ScooterApp;


