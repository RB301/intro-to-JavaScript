'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.DEFAULT_TEMPERATURE = 20;
    this.powerSavingMode = true;
    this.temperature = this.DEFAULT_TEMPERATURE = 20;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
  }

  getCurrentTemperature() {
      return this.temperature;
  }
  up() {
      if (this.isMaximumTempreture()) {
       return;
      }
     this.temperature  += 1
    }
  down() {
    if (this.isMinimumTempreture()) {
    return;
    }  
    this.temperature  -= 1  
  }
  isMinimumTempreture() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isPowerSavingModeOn() {
    return  this.PowerSavingMode === true;
  }
  turningPowerSavingModeOn() {
    this.PowerSavingMode = true;
  }
    turningPowerSavingModeOff() {
      return this.PowerSavingMode = false;
    } 
    isMaximumTempreture() {
        if (this.isPowerSavingModeOn() === false ) {
        return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF ;
        }  
        return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON;
    }
     defaultPowerSavingModeOn() {
        return this.powerSavingMode === true;
     }
    resetTemperature() {
        return this.temperature = this.DEFAULT_TEMPERATURE ; 
        }
        energyUsage() {
            if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
              return 'low-usage';
            }
            if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
              return 'medium-usage';
            }
            return 'high-usage';
          }
}
