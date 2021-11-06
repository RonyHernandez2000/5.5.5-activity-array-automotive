//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

import { Vehicle } from "./vehicleBaseClass.js";


class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        this.maxPassenger = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100
        this.scheduleService = false;
    }
}

loadPassenger(num){
    if (this.passenger < this.maxPassenger) {
        availableRoom = true;
    }
    else if (this.passenger + num <= this.maxPassenger) {
        this.passenger = num;
        return this.passenger;
    }
    else {
        console.log("Too many passengers in car")
    }
}
start(){
    if (this.fuel > 0) {
        start = true;
        console.log("Car Starts")
    }
    else if (this.fuel < 0) {
        start = false;
        console.log("No fuel")
    }
}
    scheduleService(mileage){
        if (this.mileage > 30000) {
            this.scheduleService == true
            return this.scheduleService;
        }
    }


