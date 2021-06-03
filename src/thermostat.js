class Thermostat {
  constructor(temperature = 20, powerSavingMode = true) {
    this.temperature = temperature
    this.powerSavingMode = powerSavingMode;
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