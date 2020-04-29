"use strict";
/** @format */
// Test data
const employee1 = {
    name: 'Takuya Kikuchi',
    authorizedAction: ['Final approval'],
    joinDate: new Date(),
};
// Type Guards for Type using "in"
function printEmployeeInfo(employee) {
    console.log(`Name: ${employee.name}`);
    if ('authorizedAction' in employee) {
        console.log(`Authorized actions: ${employee.authorizedAction}`);
    }
    if ('joinDate' in employee) {
        console.log(`Joined on: ${employee.joinDate}`);
    }
}
// printEmployeeInfo(employee1)
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Track extends Car {
    loadCargo() {
        console.log('Loading cargo...');
    }
}
const car = new Car();
const track = new Track();
// Type Guards for Type using "instanceof"
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Track) {
        vehicle.loadCargo();
    }
}
// Discriminated Unions
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
}
// console.log(moveAnimal({ type: 'horse', runningSpeed: 2 }));
//# sourceMappingURL=app.js.map