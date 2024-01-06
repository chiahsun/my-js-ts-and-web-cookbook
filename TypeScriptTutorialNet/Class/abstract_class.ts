abstract class Manager {
    constructor(private firstName: string, private lastName: string) {
    }
    
    abstract getSalary(): number
    
    compensationStatement() {
        return `${this.firstName} ${this.lastName} makes $${this.getSalary()} a year`;
    }
}

// error TS2511: Cannot create an instance of an abstract class.
// let m = new Manager('Joe', 'Doe');

class TechLead extends Manager {
    getSalary(): number {
        return 100000;
    }
}

let joe = new TechLead('Joe', 'Doe');
console.log(joe.compensationStatement());
