/** @format */

type Admin = {
  name: string;
  authorizedAction: string[];
};

type Employee = {
  name: string;
  joinDate: Date;
};

// Intersection types
type AssignedEmployee = Admin & Employee;

// Test data
const employee1: AssignedEmployee = {
  name: 'Takuya Kikuchi',
  authorizedAction: ['Final approval'],
  joinDate: new Date(),
};
// console.log(employee1)

// Union type
type UnknownEmployee = Employee | Admin;

// Type Guards for Type using "in"
function printEmployeeInfo(employee: UnknownEmployee) {
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

type Vehicle = Car | Track;

const car = new Car();
const track = new Track();

// Type Guards for Type using "instanceof"
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Track) {
    vehicle.loadCargo();
  }
}
// useVehicle(car)
// useVehicle(track)

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

// Discriminated Unions
function moveAnimal(animal: Animal) {
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
