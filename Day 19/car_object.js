class car{
    constructor(brand, model, year, color){
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color
    }

    getCarInfo(){
        return `${this.brand} ${this.model} ${this.year} ${this.color}`
    }

    getCarAge(year){
        return year - this.year;
    }
}

let a = new car("BMW", "M4", 2020, "Black");
console.log(a.getCarInfo());
console.log(a.getCarAge(2024))

let b = new car("Buggati", "Chiron", 2022, "Red & Black");
console.log(b.getCarInfo());
console.log(b.getCarAge(2024));