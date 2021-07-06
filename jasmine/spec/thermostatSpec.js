describe('Thermostat', () => {

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('features', () => {
    it('Starts at a temp of 20 degrees', () => {
      expect(thermostat.temp).toEqual(20);
    });
    it('Allows a user to increase temp with an up function', () => {
      expect(thermostat.up()).toEqual(21);
    });
    it('Allows a user to increase temp with a down function', () => {
      expect(thermostat.down()).toEqual(19);
    });
    it('Minimum temp is 10 degrees', () => {
      thermostat.temp = 10;
      expect(thermostat.down()).toEqual("Minimum temp reached");
    });
    it('If power saving mode is on max temp is 25 degrees', () => {
      thermostat.temp = 25;
      expect(thermostat.up()).toEqual("Max temp reach for power saving mode");
    });
    it('If power saving mode is off max temp is 32 degrees', () => {
      let test;
      test = new Thermostat();
      test.switchPS;
      test.temp = 32;
      expect(test.up()).toEqual("Max temp reached");
    });
    it('Power saving mode is on by default', () => {
      expect(thermostat.ps).toEqual(true);
    });
    it('Reset feature puts the temp back to 20 degrees', () => {
      thermostat.temp = 25
      expect(thermostat.reset()).toEqual(20);
    });
  });

});

// Thermostat starts at 20 degrees
// You can increase the temperature with an up function
// You can decrease the temperature with a down function
// The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default but it can also be turned off
// You can reset the temperature to 20 with a reset function
// You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
// (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
