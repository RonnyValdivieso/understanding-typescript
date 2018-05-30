// String
let myName: string = "Ronny";
// myName = 20;

// Number (Integer, Float)
let myAge: Number = 25;
// myAge = 'Ronny'

// Boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

//  Assign types
let myRealAge: number;
myRealAge = 25;
// myRealAge = '25';

//  Array
let hobbies: any[] = ["Music", "Programming"];
hobbies = [100];
// hobbies = 100;

// Tuples
let address: [string, number] = ["Superstreet", 99];

// Enum
enum Color {
	Gray,	// 0
	Green = 100, // 100
	Blue = 2	// 2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// Any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// Functions
function returnMyName(): string {
	return myName;
}

console.log(returnMyName());

// Void
function sayHello(): void {
	console.log("Hello!");
}

// Argument types
function multiply(value1: number, value2: number): number {
	return value1 * value2;
}
console.log(multiply(2, 10));

//  Funtions types
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
myMultiply();