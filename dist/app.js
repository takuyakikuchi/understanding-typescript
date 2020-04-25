"use strict";
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    departmentName() {
        return `Department ${this.name}`;
    }
    addEmployee(newEmployee) {
        this.employees.push(newEmployee);
    }
    showAllEmployees() {
        return this.employees;
    }
}
const accounting = new Department('accounting');
console.log(accounting.departmentName());
accounting.addEmployee('Takuya');
accounting.addEmployee('Kevin');
console.log(accounting.showAllEmployees());
//# sourceMappingURL=app.js.map