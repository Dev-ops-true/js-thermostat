'use strict';

describe("Thermostat", () => {

  let thermostat

  thermostat = new Thermostat()

  it("creates a thermostat with 20 degrees", () => {
    expect(thermostat.temperature).toEqual(20)
  });

  it("can increase the temperature", () => {
    thermostat.up(1)
    expect(thermostat.temperature).toEqual(21)
  });
});