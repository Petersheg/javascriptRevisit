'use-strict'

function Car(make,speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.newSpeed = function(){
    this.speed += 10;
    console.log(`${this.speed}km/h`);
}

Car.prototype.brake = function(){
    this.speed-= 5
    console.log(`${this.speed}km/h`);
}

const bmw = new Car('BMW', 120);
bmw.newSpeed();
bmw.brake()