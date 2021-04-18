
//  Array loop
const cities = ['Ibadan','Ikeja','Oshogbo','Onitsha',20, true, ['God']]

// For in
// for(let city in cities){
//     console.log(cities[city]);
// }

let i = cities.length -1, j=0;

for(i; i>=j; i--){
    console.log(cities[i]);
}

const typeArray = [];

// Regular For loop
for(let index=0; index < cities.length; index++){
    typeArray.push( typeof cities[index]);

    if(typeof cities[index] === 'number') break;
}
//console.log(typeArray);

// var scope = 'Global';

// const peter={
//     scope:'block'
// };

// function callScope(para){
//     const scope = "Block"
//     console.log(this.scope,para);
// }

// callScope.call(peter,["function",'All']);

const birthyears = [1855,1970,1993,2002];
const ageArray  = [];

birthyears.forEach(year =>{
    const currentYear = new Date().getFullYear()
    const age = currentYear - year;
    ageArray.push(age);
});

console.log(ageArray);

// Inner loop
let ex = 1, ji=4;
for(ex; ex<ji; ex++){
    console.log(`
        Exercise round....${ex}
    `);

    let i = 1; j=6
    for(i; i<6; i++){
        console.log(`
            Lifting weight ${i} for Exercise ${ex} 
        `);
    }
}