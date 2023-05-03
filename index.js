const coffeeMenu = require("./coffee_data");

// TASK 2
const drinkNames = [];
coffeeMenu.forEach((drink) => {
    drinkNames.push(drink.name);
});
console.log(drinkNames);

// TASK 3
const costUnder5 = coffeeMenu.filter(drink => drink.price<=5);
console.log(costUnder5);

// TASK 4
const evenNumbers = coffeeMenu.filter(drink => drink.price%2===0);
console.log(evenNumbers);

// TASK 5
const sum = coffeeMenu.reduce((sum,drink)=>{
    const updatedSum = sum + drink.price;
    return updatedSum;
},0);
console.log("The total amount is", sum);

// TASK 6
const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
console.log(seasonalDrinks);

// TASK 7
function printDrinksWIB(drink,index) {
    console.log(`${drink.name} with imported beans`);
}
seasonalDrinks.forEach((drink,index)=>printDrinksWIB(drink,index));
