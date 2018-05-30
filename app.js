"use strict";
// String
var myName = "Ronny";
// myName = 20;
// Number (Integer, Float)
var myAge = 25;
// myAge = 'Ronny'
// Boolean
var hasHobbies = false;
// hasHobbies = 1;
//  Assign types
var myRealAge;
myRealAge = 25;
// myRealAge = '25';
//  Array
var hobbies = ["Music", "Programming"];
hobbies = [100];
// hobbies = 100;
// Tuples
var address = ["Superstreet", 99];
// Enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// Any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// Functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// Void
function sayHello() {
    console.log("Hello!");
}
// Argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
