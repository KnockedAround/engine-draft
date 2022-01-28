import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  // BSFC
  // horsepower -> HP (user defined target)
  // lbsOfFuelPerHour -> lbs/hr (fuel pump supply)
  brakeSpecificFuelConsumption(
    horsepower: number, 
    lbsOfFuelPerHour: number
  ): number {
    return lbsOfFuelPerHour/horsepower;
  }

  // horsepower -> HP (user defined target)
  // brakeSpecificFuelConsumption -> ratio (fuel per hour for each hp it makes)
  // number of injectors -> (user defined) unit per cylinder typically 1:1
  // injectorDutyCycle -> (system/user set) load on injector at WOT (0-1.0)
  requiredInjectorFlowRate(
    horsepower: number, 
    brakeSpecificFuelConsumption: number, 
    numberOfInjectors: number, 
    injectorDutyCycle: number
  ): number {
    return (
      (horsepower * brakeSpecificFuelConsumption) / 
      (numberOfInjectors * injectorDutyCycle)
    );
  }

  // advertisedInjectorRate -> lbs/hr (manufacturer)
  // fuelPressure -> psi (user defined)
  // ratePressure -> psi (manufacturer)
  fuelInjectorFlowRate(
    advertisedInjectorFlowRate: number,
    fuelPressure: number,
    ratedPressure: number
  ): number {
    return (
      advertisedInjectorFlowRate * (
        Math.sqrt(fuelPressure / ratedPressure)
      )
    );
  }

  // the minimum flow rate required for the engine
  // peakHorsepower -> HP (user defined target)
  // brakeSpecificFuelConsumption -> ratio (calculated)
  necessaryMinimumFuelFlowRate(
    peakHorsepower: number, 
    brakeSpecificFuelConsumption: number
  ): number {
    return peakHorsepower * brakeSpecificFuelConsumption;
  }
  
  // Fuel pumps are usually advertised by their free flow rate
  // That is flow rate with no pressure
  // NOTE: As pressure rises, flow rate falls
  // NOTE: the minimum flow rate is required to be calculated at
  // the fuel system's operating pressure
  // Carb is typical 4-7.5 PSI, Fuel Injection is 35-65 PSI
  // Check fuel pumps curve chart (feature)

  // necessary pump size in gallons per hour
  // fuelWeightPerGallon -> lbs (Fuel weight for a specified type of fuel (look up data))
  // minimumFuelFlowRate -> lbs/hr (fuel used per hour)
  targetFuelPumpFlowRate(
    fuelWeightPerGallon: number,
    minimumFuelFlowRate: number
  ): number {
    return minimumFuelFlowRate / fuelWeightPerGallon;
  }
  
  // calculation based on one throttle bore per cylinder
  // begin with a runner length of 17.8 cm for a 10,000 RPM peak torque location
  // from the intake opening to the plenum chamber.
  // add 4.3 cm to the runner length for every 1000 RPM that you want
  // peak torque to occure before 10,000 RPM
  idealThrottleBodyRunnerLength(
    peakTorqueTargetRPM: number,
  ): number {
    const _10000RPM = 10000;
    const startingLengthFor10000RPM = 17.8; // cm
    const increasePer1000RPMAwayFrom10000RPM = 4.3; // cm
    const lengthToAdd = () => ((_10000RPM - peakTorqueTargetRPM) * increasePer1000RPMAwayFrom10000RPM);
    
    return (startingLengthFor10000RPM + lengthToAdd());
  }

  // variable length runners formula
  idealThrottleBodyRunnerDiameter_VLRF(
    peakTorqueTargetRPM: number, 
    volumetricEffiecieny: number, // percentage (0-1.0)
    displacement: number // liters
  ): number {
    const divisionConstant = 3330; // find out what this means
    const conversionFactorForMillimeters = 25.4; // mm/in
    const diameterInInches = Math.sqrt(
      (
        (peakTorqueTargetRPM * displacement * volumetricEffiecieny) / 
        divisionConstant)
    )

    return diameterInInches * conversionFactorForMillimeters;
  }

  // Helmholtz resonator method
  // using the Englemann simplified formula
  idealThrottleBodyRunnerDiameter_HRM(
    peakTorqueTargetRPM: number,
    speedOfSound: number, // meters/second
    runnerArea: number,
    runnerLength: number,
    displacementPerCylinder: number
  ) {
    // round out the formula
  }
}
