class Scooter{
  static nextSerial = 0;
  constructor(station) {

    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;;
    this.charge = 100;
    this.isBroken = false;

    Scooter.nextSerial++;
  }
  
}


module.exports = Scooter
