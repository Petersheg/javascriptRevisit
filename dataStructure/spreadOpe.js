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


/*
  Spread Operator works with only iterables like (Strings, Arrays, Maps and Set) but not on Objects;
  it provides comma separated values.
*/  
// Join two arrays together
const newArray = [...restaurant.mainMenu, ...restaurant.starterMenu];

  console.log(newArray);

// String to Array
const myName = 'Oluwasegun';
//let nameArray = [...myName];
let nameArray = myName.split('');
console.log(nameArray);

/* You can pass multiple parameter to a Method or function using a spread operator*/ 
restaurant.orderPasta(...restaurant.mainMenu);

/*Spread Operator is use to create a deep clone of an object instead of a shallow clone*/
// Creating a copy of restaurant object
const newRestaurant = {...restaurant};

// add new name property to the newRestaurant object
newRestaurant.name = "Peter Oluwasegun";
console.log(newRestaurant.name);
console.log(restaurant.name);