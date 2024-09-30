class Employee{
    constructor(name, age, salary){
        this.name = name
        this.age = age
        this.salary = salary
    }

    getDetails(){
        console.log(`Name: ${this.name}
Age: ${this.age}
Salary: ${this.salary}`)
    }
}

class Manager extends Employee{
    constructor(name, age, salary, department){
        super(name, age, salary)
        this.department = department
    }

    getManagerDetails(){
        super.getDetails()
        console.log(`Department: ${this.department}`)
    }
}

let Madhav = new Manager("Madhav", 27, 100000, "Fullstack Developer") 
Madhav.getManagerDetails();