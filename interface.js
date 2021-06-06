document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature + " °C";
    document.querySelector('#usage').className = thermostat.energyUsage();
  }

  const thermostat = new Thermostat();
  updateTemperature;

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature;
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'On';
    updateTemperature();
  });

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'Off';
    updateTemperature();
  });
});