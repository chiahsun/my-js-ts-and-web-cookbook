class Employer {
    static count = 0;
    private static sManagerCount = 0;
    
    constructor(private firstName: string, private lastName: string, private jobTitle: string) {
        Employer.count++;
        if (jobTitle.includes("manager") || jobTitle.includes("Manager")) {
            Employer.sManagerCount++;
        }
    }
    
    public static get managerCount() {
        return Employer.sManagerCount;
    }
    public static getManagerCount() {
        return Employer.sManagerCount;
    }
}

console.log(Employer.count, '\n');
let john = new Employer('John', 'Doe', 'Front-end developer');
console.log(Employer.count, '\n');
let jane = new Employer('Jane', 'Doe', 'Front-end manager');
console.log(Employer.count);
console.log(Employer.managerCount);
console.log(Employer.getManagerCount(), '\n');
