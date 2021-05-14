'use strict';
// CONSTRUCTOR FUNCTION
/*The differnt between this and the factory function is that an inatance of this have to be created to 
be relevant*/ 

function Vehicle(maker,model){
    console.log(this);
    this.maker = maker,
    this.model = model
}

/*This happen when a constructor function is created*/
//1 An empty object is created, {}
//2 this keyword is set that empty object {} when the function get called.
//3 {} is linked to prototype
//4 {} is return automatically.

const toyota = new Vehicle('Toyota', 'T30');
console.log(toyota);

//       PROTOTYPE
/*Add all functionalities with prototype*/ 

const proto = Vehicle.prototype;
proto.calcYear = function(year){
    let vehicleModel = `${this.model}${year}` 
    console.log(vehicleModel);
}
toyota.calcYear(2020);

//make use of __proto__ or className.prototype.isPrototypeOf(instance) tocheck the prototype of instance
console.log(toyota.__proto__);
console.log(proto.isPrototypeOf(toyota));

// Aside methods other prototype can be added using prototype
proto.makerCountry = 'Germany';

// To know which of the properties are implicit to a class make use of instance.hasOwnProperty(property);
const ownProperty = toyota.hasOwnProperty('makerCountry');
console.log(ownProperty);