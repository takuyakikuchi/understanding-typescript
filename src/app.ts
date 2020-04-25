class Department {
  private name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  departmentName(): string {
    return `Department ${this.name}`;
  }

  addEmployee(newEmployee: string): void {
    this.employees.push(newEmployee);
  }

  showAllEmployees(): string[] {
    return this.employees;
  }
}

const accounting = new Department('accounting');

console.log(accounting.departmentName());

accounting.addEmployee('Takuya');
accounting.addEmployee('Kevin');

console.log(accounting.showAllEmployees());