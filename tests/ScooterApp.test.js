const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

describe("registerUser method tests", () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  test("Should return instance of User", () => {
    const response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });

  test("returns if user is a minor", () => {
    expect(() => scooterApp.registerUser("minor user", "test123", 17).toThrow("too young to register"));
  });

  test("returns if already registered", () => {
    scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(() => scooterApp.registerUser("Joe Bloggs", "test123", 21).toThrow("already registered"));
  });

  test("correctly saves user as a value with the correct username as key", () => {
    scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(scooterApp.registeredUsers["Joe Bloggs"]).toBeInstanceOf(User);
  });
});


// describe("loginUser method tests", () => {
//   test("login works with right passoword", () => {});
// });

// log in

// log out

// rent scooter

// dock scooter
