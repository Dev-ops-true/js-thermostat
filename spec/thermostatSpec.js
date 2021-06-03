'use strict';

describe("Thermostat", () => {

  let thermostat
  beforeEach(function () {
    thermostat = new Thermostat()
  })

  it("creates a thermostat with 20 degrees", () => {
    expect(thermostat.temperature).toEqual(20)
  });

  it("power saving mode is on by default", () => {
    expect(thermostat.powerSavingMode).toEqual(true)
  });

  it("can turn off power saving mode", () => {
    thermostat.ecomode(false)
    expect(thermostat.powerSavingMode).toEqual(false)
  });

  it("can turn on power saving mode", () => {
    thermostat.ecomode(false)
    thermostat.ecomode(true)
    expect(thermostat.powerSavingMode).toEqual(true)
  });

  it("can reset the temperature to 20", () => {
    thermostat.up(10)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  });
  

  it("can increase the temperature", () => {
    thermostat.up(1)
    expect(thermostat.temperature).toEqual(21)
  });

  it("can decrease the temperature", () => {
    thermostat.down(1)
    expect(thermostat.temperature).toEqual(19)
  });

  it("has a minimum temperature of 10 degrees", () => {
    thermostat.down(19)
    expect(thermostat.temperature).toEqual(10)
  });

  it("has a max of 25 when power saving mode is on", () => {
    thermostat.up(10)
    expect(thermostat.temperature).toEqual(25)
  });

  it("has a max of 32 when power saving mode is off", () => {
    thermostat.ecomode(false)
    thermostat.up(25)
    expect(thermostat.temperature).toEqual(32)
  });

  it("can display low usage on the thermostat", () => {
    thermostat.down(3)
    expect(thermostat.usage()).toEqual("low-usage")
  });

  it("can display medium usage on the thermostat", () => {
    thermostat.up(3)
    expect(thermostat.usage()).toEqual("medium-usage")
  });

  it("can display high usage on the thermostat", () => {
    thermostat.temperature = 28
    expect(thermostat.usage()).toEqual("high-usage")
  });

});