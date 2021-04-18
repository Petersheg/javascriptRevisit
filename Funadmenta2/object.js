// My Object
const peter = {
    firstName : "Oluwasegun",
    surName : "Peter",
    birthYear : 2002,
    job : "Web Developer",
    hasMarried : false,
    friends:['Tolu','Lekan','Paulo','Ibrahim'],

    // Object Method
    // calcAge : function(){
    //     return 2020 - this.birthYear
    // }

    calcAge : function(){
        this.age = 2020 - this.birthYear;
        return this.age;    
    },

    getsummary : function(){
        const fullName = this.firstName +" "+ this.surName;
        const age =  this.calcAge();
        const hasMarriedValue = this.hasMarried ? 'Married' : 'not Married';
        const peterFriends = this.friends.length;

        this.summary = `${fullName} is ${age} years old, He is a ${this.job} 
        with ${peterFriends} friends and ${hasMarriedValue}`
        return this.summary
    }
}

// This keyword would point to the object calling the method
peter.calcAge();
const summaryResult  = peter.getsummary()
console.log(summaryResult);
//console.log(peterAge);