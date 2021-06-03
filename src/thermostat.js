class Thermostat {
  constructor(temperature = 20) {
    this.temperature = temperature;
  }

  up(setting) {
    this.temperature += setting
  }

  down(setting) {
    var currentTemp = this.temperature

    if (10 > (currentTemp -= setting)) {
      this.temperature = 10;
    } else { 
      this.temperature -= setting;
    }
 }
}