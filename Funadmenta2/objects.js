const Peter={
    fname:"Peter",
    lName :'Oluwasegun',
    status:'Single',
    interest :['Music', 'Books']
}

const marriedPeter = {};
Object.assign(marriedPeter,Peter);

marriedPeter.status = 'Married';
// console.log(marriedPeter);
// console.log(Peter);

/*
    Note that Object.assign create a shallow clone of an object i.e if there exist an another 
    object types(Array or Objct); e.g
*/

// Trying to modify marriedPeter.interest array will also modify Peter.interest too which is wrong.
marriedPeter.interest.push('Coding');

console.log(marriedPeter);
console.log(Peter);

// To create a deep clone of an object, a spread operator is preferable.


