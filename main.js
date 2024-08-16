"use strict";

const restaurant = {
  name: "classico Italain",
  location: "daddu",
  categories: ["itlain", "daduai", "pizzaria", "oraganic"],
  starterMenu: ["foccia", "bread", "Garlic"],
  mainMenu: ["pizza", "pasta", "ristto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

///destructring of array
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
//receive 2 value from the function
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested; //skiping 4
console.log(i, j, k);
