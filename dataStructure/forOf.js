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
    For Of is use to loop over Array with ease instaed of the regular loop.
*/

// creating Menu array from starterMenu and mainMenu

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

// Using For of to loop over menu array
for(item of menu){
    //console.log(item);
}

// to have access to the array then make use of .enteries() on the main array.
for([i,item] of menu.entries()){
    //console.log(i+1,item);
}

for(item in menu){
    console.log(item);
}

/* ******************************************ENHANCED OBJECT LITERALS*******************************************/
// If the Property and the value is the same then don't repeat them e.g  peter; instead of peter : peter; 

/*/ Instead of specifying function keyword while declaring a method, 
you can make the the property a method instead eg peter(){..}*/

// Optional Chaining, 
/* Optional chining is used mostly with object to check if a property of an object exit before trying to access it value*/
 
const propertyCheck = restaurant?.openingHours ? 'property exist': 'It does not exist'
console.log(propertyCheck);

// Nullish Coalescing
/* It is use to specify a default value just in case the property of an object does not exist*/

let defaultProperty = restaurant.openingHours?.sun ?? {open:'10am',close:'3pm'};
console.log(defaultProperty);