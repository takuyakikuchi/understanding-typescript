"use strict";
class Department {
    constructor(id, name, employees = []) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    addEmployee(newEmployee) {
        this.employees.push(newEmployee);
    }
    get allEmployees() {
        return this.employees;
    }
}
class ItDepartment extends Department {
    constructor() {
        super(...arguments);
        this.specialties = ['Scrum Master', 'Front End', 'Back End'];
    }
    get allSpecialties() {
        return this.specialties;
    }
    departmentName() {
        return `IT Department - No.${this.id}`;
    }
}
;
const itDepartment = new ItDepartment(1, 'IT Department');
itDepartment.addEmployee('Takuya');
itDepartment.addEmployee('Kevin');
console.log(itDepartment.departmentName());
console.log(itDepartment.allSpecialties);
console.log(itDepartment.allEmployees);
//# sourceMappingURL=app.js.map