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
    expect(() =>
      scooterApp
        .registerUser("minor user", "test123", 17)
        .toThrow("too young to register")
    );
  });

  test("returns if already registered", () => {
    scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(() =>
      scooterApp
        .registerUser("Joe Bloggs", "test123", 21)
        .toThrow("already registered")
    );
  });

  test("correctly saves user as a value with the correct username as key", () => {
    scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(scooterApp.registeredUsers["Joe Bloggs"]).toBeInstanceOf(User);
  });
});

describe("loginUser method tests", () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  test("login works with right password and changes loging status to true", () => {
    scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(scooterApp.loginUser("Joe Bloggs", "test123")).toBe(true);
    const user = scooterApp.registeredUsers["Joe Bloggs"];
    expect(user.loggedIn).toBe(true);
  });
  test("login throws with wrong password", () => {
    scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(() => scooterApp.loginUser("Joe Bloggs", "test234")).toThrow(
      "incorrect password"
    );
  });
});

describe("logoutUser method tests", () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  test("logoutUser changes login status to false", () => {
    scooterApp.registerUser("Joe Bloggs", "test123", 21);
    scooterApp.loginUser("Joe Bloggs", "test123");
    scooterApp.logoutUser("Joe Bloggs");
    expect(scooterApp.registeredUsers["Joe Bloggs"].loggedIn).toBe(false);
  });

  test("logoutUser throws error when user not found", () => {
    expect(() => scooterApp.logoutUser("Joe Bloggs")).toThrow(
      "no such user is registered"
    );
  });
});

describe("createScooter method tests", () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  test('creates an instance of Scooter class', () => {
    const scooter = scooterApp.createScooter("Park");
    expect(scooter).toBeInstanceOf(Scooter);
  })
  test('scooter gets added to the station', () => {
    const scooter = scooterApp.createScooter("Park");
    expect(scooterApp.stations["Park"].length).toBe(1);
  })
  test('throws error on unexistent station', () => {
    expect(() => scooterApp.createScooter("ketchup").toThrow('no such station'));
  })
})

// createScooter(station)
// dockScooter(scooter, station)
// rentScooter(scooter, user)
// print()


