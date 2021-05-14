'use-strict'
//INHERITANCE CONSTRUCTOR FUNCTION
// This is to demonstrate constructor function inheritance using Object.create()

// PARENT CLASS
const Person = function(firstName, yearOfBirth){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
}

// Add a prototype to the parent class
Person.prototype.calcAge = function(){
    let age = 2022 - this.yearOfBirth;
    console.log(age);
}

const kenny = new Person('Kenny',1996);
//kenny.calcAge();



// Child Class
const Student = function(firstName,yearOfBirth,course){
    // For child class to make use of it parent variable, make use of .call on the parent as shown below
    Person.call(this,firstName,yearOfBirth);
    this.course = course;
}

// Child class inheriting from Parent class
Student.prototype = Object.create(Person.prototype);

// Add Prototype to child class
Student.prototype.introduce = function(){
    let intro = `My name ${this.firstName} and i study ${this.course},i was born ${this.yearOfBirth}`
    console.log(intro);
}

const peter = new Student("Peter", 2000, "Yoruba Education")
//peter.introduce();
//peter.calcAge();

// CLASS INHERITANCE
class Car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed
    }
    newSpeed(){
        this.speed += 10;
        console.log(`${this.speed}km/h`);
    }
    
    brake(){
        this.speed-= 5
        console.log(`${this.speed}km/h`);
    }
}

class EV extends Car {
    #charge; //Public field

    constructor(make,speed,charge){
        super(make,speed);//A call to parent
        this.#charge = charge;
    }
    
    
    // Public Methods
    newSpeed(){
        this.speed +=30
        console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}`);
        return this //Makes this method chainable
    }
    brake(){
       this.speed -= 15
       console.log(`${this.make} going at ${this.speed}km/h`);
       return this;
    }

    chargeBattery(){
        console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}`);
        return this;
    }
} 

// Chanable Methods
const ford = new EV('Ford', 120, '100%')
ford.newSpeed()
.newSpeed()
.chargeBattery()
.brake();