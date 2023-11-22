//Homework Tues:

//1a:
var myName = "Dan";
//console.log(myName);

//1b:
var myAge = 33;
//console.log(myAge);

//1c:
var isHappy = true;
//console.log(true);

//2:
var num1 = 5;
var num2 = 10;
//console.log(num1 + num2);

//3:
var str = "Hello" + " " + "World";
//console.log(str);

//5:
var age = 19;
//console.log(age > 18);

//4:
var me = {
  name: "Dan Casey",
  age: 33,
  height: 180,
};
//console.log(me);

var list = ["Avengers Endgame", "Star Wars", "Ironman"];
//console.log(list);

//6+7:
//console.log(Math.round(Math.random() * 1000));

//Homework Thurs:

var i = 10;
while (i < 10) {
  console.log(i);
  i++;
}

var fruits = [
  "apple",
  "pineapple",
  "watermelon",
  "grapes",
  "lemon",
  "cherry",
  "melon",
  "orange",
  "banana",
  "pear",
];

//fruits.push("mango");
//console.log(fruits);

// fruits.unshift("mango");
//console.log(fruits);

// fruits.pop();
//console.log(fruits);

// fruits.shift();
//console.log(fruits);
// console.log(fruits.shift());

//fruits.splice(5, 5);
//console.log(fruits);

// fruits.splice(1, 1, "blueberry");
//console.log(fruits);

// var copy = fruits.slice(5, 9);
// console.log(fruits, copy);

// fruits.reverse();
//console.log(fruits);

// var fruits2 = ["blackberry", "lime", "passionfruit"];
// var allFruits = fruits.concat(fruits2);
// console.log(allFruits);

// console.log(fruits.join(" - "));

/* fruits.forEach(function (item) {
  console.log(item);
});
*/

// console.log(fruits.includes("pineapple"));

// var indexOf = fruits.indexOf("lemon");
// console.log(indexOf);

var legal = [21, 35, 30, 18, 16];

/* function callback(item) {
  return item > 17;
}
console.log(legal.every(callback));
*/

/* function callback(item) {
  return item > 17;
}
console.log(legal.some(callback));
*/

var people = [
  {
    name: "Ben",
    age: 27,
    isHappy: true,
    favRacer: "Lando Norris",
  },
  {
    name: "James",
    age: 35,
    isHappy: true,
    favRacer: "Lewis Hamilton",
  },
  {
    name: "Thomas",
    age: 16,
    isHappy: false,
    favRacer: "Max Versappen",
  },
];

/* function callback(item) {
  return item.age > 18;
}
var filtered = people.filter(callback);

console.log(filtered);
*/

/* function callback(item) {
  return item.favRacer.includes("Lewis Hamilton");
}
var person = people.find(callback);

console.log(person);
*/

/*function callback(item) {
  return item.favRacer.includes("Lewis Hamilton");
}
var person = people.findIndex(callback);

console.log(person);
*/

var cars = [
  { id: 1, title: "BMW M3", price: 8119500 },
  { id: 2, title: "Toyota Supra", price: 5713000 },
  { id: 3, title: "Mercedes C63", price: 9000000 },
];
/* function callback(firstItem, secondItem) {
  if (firstItem.price > secondItem.price) {
    return 1;
  }
  if (firstItem.price < secondItem.price) {
    return -1;
  }
  return 0;
}

cars.sort(callback);

console.log(cars);
*/

/*var html = cars.map(function (item) {
  return (
    "<div><p>" +
    item.title +
    "</p><p>&pound;" +
    Math.round(item.price / 100) +
    "</p></div>"
  );
});

console.log(html.join(""));
*/

var ABV = 10;

/*if (ABV <= 10) {
  console.log("Alcohol is Weak");
} else if (ABV <= 40) {
  console.log("Alcohol is Moderate");
} else {
  console.log("Alcohol is Strong");
}
*/

/* switch (ABV) {
  case 9:
    console.log("This alcohol is weak");
    break;

  case 10:
    console.log("This alcohol is moderate");
    break;

  case 11:
    console.log("This alcohol is strong");
    break;

  default:
    console.log("Lets start drinking");
    break;
}
*/

/* for (var i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
*/

/* for (var i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
*/
