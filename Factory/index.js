// Creational Design Pattern

// A factory manufactures objects.
// Central location for creating objects.
// Reduce the need for using the new () keyword.

// A software company may have different classes for their employees.
// They may have a software tester or a developer. A factory could
// abstract the creation process of this.

class Developer {
    constructor(name) {
        this.name = name;
        this.type = 'Developer';
    }
}

class Tester {
    constructor(name) {
        this.name = name;
        this.type = 'Tester';
    }
}

class EmployeeFactory {
    constructor() {
        this.employees = [];
    }

    create(name, type) {
        switch (type) {
            case 'Developer':
                return new Developer(name);
            case 'Tester':
                return new Tester(name);
            default:
                console.log('Invalid employee type');
                break;
        }
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }
}

function say() {
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}
const employeeFactory = new EmployeeFactory();

const employee = employeeFactory.create('John', 'Developer');
console.log('employee', employee);
employeeFactory.addEmployee(employee);
employeeFactory.addEmployee(employeeFactory.create('Jane', 'Tester'));

employeeFactory.employees.forEach(employee => say.call(employee));
console.log('Fin');
