'use strict';

describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
    thermostat.temperature = 20;
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature with up()', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with down()', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a power saving mode on by default', () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch the power saving mode on again', () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when the power saving mode is on', () => {
    it('has a maximum temperature of 25 degrees', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', () => {
    it('has a maximum temp of 32', () => {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 13; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  it('can reset to the default temp',() => {
    thermostat.resetTemperature()
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });

  describe('displaying usage levels', () => {
    describe('when the temperature is below 18 degress', () => {
      it('it is considered low-usage', () => {
        for(let i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temp is between 18 and 25', () => {
      it('it is considered as medium-usage', () => {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temp is anything else', () => {
      it('it is considered as high-usage', () => {
        thermostat.switchPowerSavingModeOff()
        for(let i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });

});