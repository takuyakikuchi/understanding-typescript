class Department {
  private employees: string[] = [];

  constructor(private readonly id: number, private name: string) {}

  departmentName(): string {
    return `Department No.${this.id}: ${this.name}`;
  }

  addEmployee(newEmployee: string): void {
    this.employees.push(newEmployee);
  }

  showAllEmployees(): string[] {
    return this.employees;
  }
}

const accounting = new Department(1, 'accounting');

console.log(accounting.departmentName());

accounting.addEmployee('Takuya');
accounting.addEmployee('Kevin');

console.log(accounting.showAllEmployees());