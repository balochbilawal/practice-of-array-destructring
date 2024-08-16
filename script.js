"use strict";

const restaurant = {
  name: "classico Italain",
  location: "daddu",
  categories: ["itlain", "daduai", "pizzaria", "oraganic"],
  starterMenu: ["foccia", "bread", "Garlic"],
  mainMenu: ["pizza", "pasta", "ristto"],

  openHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 21,
    },
    sun: {
      open: 0,
      close: 20,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name, openHour, categories } = restaurant;
console.log(name, openHour, categories);
