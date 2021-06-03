class Thermostat {

  constructor(temperature = 20) {
    this.temperature = temperature;
  }

  up(setting) {
    this.temperature += setting
  }

  down(setting) {
    this.temperature -= setting
  }
}