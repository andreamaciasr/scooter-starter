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

  print() {
    console.log("Registered Users: ", this.registeredUsers);
    console.log("Stations: ", this.stations);
    console.log("No. of Scooters at Downtown station: ", this.stations["Downtown"].length);
    console.log("No. of Scooters at Train station: ", this.stations["Train Station"].length);
    console.log("No. of Scooters at Park station: ", this.stations["Park"].length);
  }
}

const test = new ScooterApp;
test.createScooter("Park");

test.print();

module.exports = ScooterApp;


