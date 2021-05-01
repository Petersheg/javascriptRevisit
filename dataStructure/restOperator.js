/*Rest Operator is the opposite of Spread operator, it is use to pack the remaining elememt inatead of unpacking them*/
//eg

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
      thru: {
        open: 12,
        close: 22,
      },
  
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0,
        close: 24,
      },
    },
  
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  
    orderPasta(ing1, ing2, ing3) {
      console.log(`Here is your declicious paste with 
      ${ing1}, ${ing2}, ${ing3}`);
    },
  
    orderPizza(mainIngredent,
      ...otherIngredents) {
      console.log(mainIngredent);
      console.log(otherIngredents);
    }
};

// For destructuring
const arr = [1,4,7,4,'Three',true];

const [one,four, ,...others] = arr;
console.log(one,four,others);

const newArr = [2,6,8,...arr];
console.log(newArr);

/* if you want your function to receive any number of parameter then make use of Rest operator */ 

function addAllNumber(...numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    console.log(sum);
};

const num = [1,3,5,7,8,9,5,6];

// To pass Array to a function use Spread Operator.
addAllNumber(...num);
addAllNumber(1,6);

