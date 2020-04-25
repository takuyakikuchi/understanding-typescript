"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    departmentName() {
        return `Department No.${this.id}: ${this.name}`;
    }
    addEmployee(newEmployee) {
        this.employees.push(newEmployee);
    }
    showAllEmployees() {
        return this.employees;
    }
}
const accounting = new Department(1, 'accounting');
console.log(accounting.departmentName());
accounting.addEmployee('Takuya');
accounting.addEmployee('Kevin');
console.log(accounting.showAllEmployees());
//# sourceMappingURL=app.js.map