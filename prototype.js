// Prototypical Inheritance
/* All instance of a class automatically inherit all properties specifield using the 
.prototype keyword on the class else no inheritance.*/ 

const Human = function(skinColor,continent){
    this.skinColor =skinColor;
    this.continent = continent;
};

// Instance will be able to inherit this
Human.prototype.LogDetails = function(){
    let details = `My skin is ${this.skinColor} and originated from ${this.continent}`
    console.log(details);
}

// Instance will not inherit this!
Human.returnGender = function(gender){
    console.log(`My gender is ${gender}`);
};

// hasOwnProperty() can be use to check for property added explicitly (i.e) with prototypes
Human.prototype.country = 'USA';


const american = new Human('White','America');//Creating an instance of Human
american.LogDetails();

american.hasOwnProperty('country') ? 
    console.log('I am define implicitly') : 
    console.log('No i am define explicitly');//This will return "No i am define explicitly"


Human.returnGender('Male')//Method not inherited by instance.

