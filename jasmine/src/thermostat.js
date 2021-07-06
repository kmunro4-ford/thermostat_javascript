class Thermostat {

  constructor() {
    this.temp = 20
    this.ps = true
  }
  
  up() {
    if (this.ps) {
      if (this.temp >= 25) {
        return "Max temp reach for power saving mode";
      } else {
    return this.temp += 1;
    }
  } else {
    if (this.temp >= 32) {
      return "Max temp reached";
    } else {
      return this.temp += 1;
    }
  }
  }
  down() {
    if (this.temp <= 10) {
      return "Minimum temp reached";
    } else {
    return this.temp -= 1;
    }
  }
  reset() {
    return this.temp = 20;
  }
  energyUsage() {
    if (this.temp < 18) {
      return "low_usage";
    } else if (this.temp <= 25) {
      return "medium-usage";
    } else {
      return "high-usage"
    }
  }
  switchPS() {
    if (this.ps) {
      this.ps = false;
      return this.ps;
    } else {
      this.ps = true;
      return this.ps;
    }
  }

}


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
