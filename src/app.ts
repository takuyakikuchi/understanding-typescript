abstract class Department {

  constructor(protected id:number, private name: string, private employees: string[] = []) {}

  abstract departmentName(): void;

  addEmployee(newEmployee: string): void {
    this.employees.push(newEmployee);
  }

  get allEmployees(): string[] {
    return this.employees;
  }
}

class ItDepartment extends Department {
  private specialties = ['Scrum Master', 'Front End', 'Back End'];

  get allSpecialties() {
    return this.specialties;
  }

  departmentName(): string {
    return `IT Department - No.${this.id}`;
  }
};

const itDepartment = new ItDepartment(1, 'IT Department');
itDepartment.addEmployee('Takuya');
itDepartment.addEmployee('Kevin');
console.log(itDepartment.departmentName());
console.log(itDepartment.allSpecialties);
console.log(itDepartment.allEmployees);