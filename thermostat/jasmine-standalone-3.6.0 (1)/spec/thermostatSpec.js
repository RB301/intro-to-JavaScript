'use strict';

describe('Thermostat', function() {

    var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can increase the tempreture', function() {
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toEqual(21)
  });

  it('can decrease the tempreture', function() {
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19)
});

  it('has minimum tempreture', function() {
 for (var i =0; i <11; i++) {
     thermostat.down()
  }
 expect(thermostat.getCurrentTemperature()).toEqual(10)
  });

  it('is power saving mode on?', function() {
      thermostat.turningPowerSavingModeOn()
  expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('is power saving mode off?', function() {
    thermostat.turningPowerSavingModeOff()
  expect(thermostat.isPowerSavingModeOn()).toBe(false)
  });
  
  it('has maximum temperature of 25', function() {
    for (var i =0; i <5; i++) {
        thermostat.up()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25)
    });

  it('has maximum temperature of 32', function() {
    for (var i =0; i <13; i++) {
        thermostat.up()
    }
 expect(thermostat.getCurrentTemperature()).toEqual(32)
   });

  it('has PSM on by default', function() { 
    expect(thermostat.defaultPowerSavingModeOn()).toBe(true);
  });

  it('can be reset to default temperature', function() {
    for (var i =0; i <5; i++) {
        thermostat.up()
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  
  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
  
    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
  
    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
});
});

