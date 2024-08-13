// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the parent Vehicle constructor with the required parameters (excluding wheels)
    super(vin, color, make, model, year, weight, topSpeed);

    // Initialize Truck-specific properties
    this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel(18, "DefaultBrand"));
    this.towingCapacity = towingCapacity;
  }


  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The truck is towing the ${vehicle.make} ${vehicle.model}.`);
    } else {
      console.log(`The ${vehicle.make} ${vehicle.model} is too heavy to be towed by this truck.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(`Wheels:`);
    this.wheels.forEach((wheel, index) => {
      console.log(`  Wheel ${index + 1}: Diameter ${wheel.getDiameter}, Brand ${wheel.getTireBrand}`);
    });
  }
}

// Export the Truck class as the default export
export default Truck;