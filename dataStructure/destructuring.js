'use strict'

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

//   Destrure Array
// If you wish to skip a value from an array, make use of comma instead of specifying variable that holds the value.
let [foca,brus,,capr] = restaurant.starterMenu;


// Nested Array 
const nested = [2,6,"Three",[true,8]];
let [tu,six,,[tr,et]] = nested;
console.log(tu,six,tr,et);
console.log(foca,brus,capr);

// switching  Array
[foca,brus] = [brus,foca];
console.log(foca,brus,capr);

