console.log('--------------------------------');
console.log('-------------Q1-----------------');

//Q1
// Write a for loop that will iterate from 50 to 20. 
// For each iteration, if the current number is a multiple of 3, console.log the value.

for (let i = 50; i > 20; i--) {
    if (i % 3 === 0){
      console.log(i + " is a multiple of 3");
    } 
}

console.log('--------------------------------');
console.log('-------------Q2-----------------');
console.log("Warning!! The answer has been commented because it is an INFINITY LOOP")

// Q2
// Write out an "infinite loop" below. Don't run the loop in your console unless you are prepared to force quit your browser!! Check with the instructor to see if it is, or live dangerously and crash your browser!

// for (let i= 101; i > 100; i++){
//     console.log(i);
// }

console.log('--------------------------------');
console.log('-------------Q3-----------------');

// Q3 works
// Loop through this array and print every other value, starting with the second.

const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald",
 "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", 
 "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];

for (let i = 1; i < presidents.length; i+=2) {
    console.log(presidents[i]);
}

console.log('--------------------------------');
console.log('-------------Q4-----------------');

// Q4
// Create a new array with the gluten-free options from this menu:

const menu = [
  {name: "pizza", glutenFree: false},
  {name: "salad", glutenFree: true},
  {name: "donut", glutenFree: false},
  {name: "steak", glutenFree: true},
  {name: "chicken", glutenFree: true},
  {name: "cheeseburger", glutenFree: false}
];

// TESTING acces to objects elements
// console.log(menu.length);
// console.log(menu[0].glutenFree);
// console.log(menu[1].glutenFree);
// console.log(menu[2].glutenFree);

const glutenFreeMenu = []

for (let i = 0; i < menu.length; i++) {
  if (menu[i].glutenFree === true) {
     glutenFreeMenu.push(menu[i].name);
  }  
}
console.log(glutenFreeMenu);


// for (let i = menu.glutenFree; i < menu.length; i++) {
//     if (i === true){
//         console.log(i);
//     }
// }

// for (let i = 0; i < menu.length; i++) {
//   if (i === menu.glutenFree && i === true){
//       console.log(i);
//   }

// }
// for (let i = 0; i < menus.length; i++) {
//   if (menus[i].glutenFree === true) {
//        console.log(menus[i].glutenFree);
//   }  
// }
// const glutenFreeMenu = []
// for (let i = 0; i < menu.length; i++) {
//   if (menu[i].glutenFree === true) {
//      glutenFreeMenu.push(menu[i].glutenFree);
//   }  
// }

console.log('--------------------------------');
console.log('-------------Q5-----------------');

// Q5
// Loop through the following array and push the items that are not numbers into a seperate array

const mixedArray = [
  1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 
  'Whats the deal with airplane peanuts', 3.14,
  {barry: "Mannilow",}, 
  6, 55, null, 
  "Old " + "Crow " + " Medicine Show", 3, 2, 
  "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30
]

// TESTING access to array
// console.log(mixedArray);
// console.log(mixedArray[11]);

// to check for non numbers use typeof operator because it indicates the type of data in the array
// use inequality operator !=== (not equal) to push all the other data into a new array

const nonNumberArray = []

for (i = 0; i < mixedArray.length; i++){
  if (typeof mixedArray[i] !== "number" ) {
    nonNumberArray.push(mixedArray[i]);
  }
};

console.log(nonNumberArray);

