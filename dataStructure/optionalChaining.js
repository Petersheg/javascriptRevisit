const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
      thur: {
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

/*/ 
    Instead of testing for an object property that does not exit which could cause error then make use of 
    optional chaining (?.) instead.
*/

const days = ['mon','tue','wed','thur','fri','sat','sun'];

for(day of days){
   const open = restaurant.openingHours.day?.open ?? 'Closed';
   console.log(`On ${day} we are ${open}`);
}

restaurant.orderPasta?.('A','B','C') ?? 'Method does not exist.'
//console.log(returnValue);

const keyz = Object.values(restaurant.openingHours);
console.log(keyz);