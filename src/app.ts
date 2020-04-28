type Admin = {
  name: string;
  authorizedAction: string[];
}

type Employee = {
  name: string;
  joinDate: Date;
}

// Intersection types
type AssignedEmployee = Admin & Employee

// Test data
const employee1: AssignedEmployee = {
  name: "Takuya Kikuchi",
  authorizedAction: ["Final approval"],
  joinDate: new Date()
}
console.log(employee1)
