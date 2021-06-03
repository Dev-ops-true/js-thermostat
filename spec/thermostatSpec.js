'use strict';

describe("Thermostat", () => {

  let thermostat
  beforeEach(function () {
    thermostat = new Thermostat()
  })

  it("creates a thermostat with 20 degrees", () => {
    expect(thermostat.temperature).toEqual(20)
  });

  it("can increase the temperature", () => {
    thermostat.up(1)
    expect(thermostat.temperature).toEqual(21)
  });

  it("can decrease the temperature", () => {
    console.log(thermostat.temperature)
    thermostat.down(1)
    expect(thermostat.temperature).toEqual(19)
  });

  it("has a minimum temperature of 10 degrees", () => {
    thermostat.down(19)
    expect(thermostat.temperature).toEqual(10)
  });

});