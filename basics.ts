// The main Typescript types

let staticVariable: string = 'Hello!';
let x: number = 45;
let isMonday: boolean = true;
let myObject: object = {
	name: 'Just an Object',
	color: 'red',
};
let myObject2: { name: string, color: string } = {
	name: 'Just an Object',
	color: 'red',
}
let nothing: undefined = undefined;
// let bigNumber: bigint = 10234234234243234234n;

let myNumbers: number[] = [1, 2, 3, 4];
let myNames: string[] = ['Shaun', 'Wassell'];
let myResults: boolean[] = [true, false, false, true];
let people: object[] = [{
	name: 'John Doe',
	age: 44,
}];

let myNumberString = '5';
let myNumber = Number(myNumberString);

// The "any" type in Typescript

let myStuff: any[] = ['Shaun', 53, true, { a: 1 }];
let myDynamicVariable: any = 6;
myDynamicVariable = 'Hello!';

// Functions in Typescript

function myFunction(a: number, b: number): number {
	return a + b;
}

const myArrowFn = (a: number, b: number): number => {
	return a + b;
}

function someFnWithCallback(
	callback: (a: number) => number,
) {
	callback(4);
}

// Defining Your Own Types

// Type aliases:
type Word = string;
let myWord: Word = 'Hello!';

type Person = {
	name: string,
	age: number,
};
type Employee = Person & {
	jobTitle: string,
	salary: number,
	yearsAtCompany: number,
}
const john: Person = {
	name: 'John Doe',
	age: 55,
};
const bob: Person = {
	name: 'Bob Smith',
	age: 33,
};

const bobWithAJob: Employee = {
	name: 'Bob Smith',
	age: 33,
	jobTitle: 'Software developer',
	salary: 100000,
	yearsAtCompany: 1,
}

// Interfaces:
interface Person2 {
	name: string,
	age: number,
}
const john2: Person2 = {
	name: 'John Doe',
	age: 55,
}

interface Employee2 extends Person2 {
	jobTitle: string,
	salary: number,
	yearsAtCompany: number,
}

const johnWithAJob: Employee2 = {
	name: 'John Doe',
	age: 55,
	jobTitle: 'Softare developer',
	salary: 100000,
	yearsAtCompany: 5,
}

// Union Types
let jobTitle: string | undefined = undefined;

type HairColor = "brown" | "blonde" | "black" | "red" | "green";

interface PersonWithHair extends Person {
	hairColor: HairColor,
}

const frank: PersonWithHair = {
	name: 'Frank',
	age: 77,
	hairColor: "brown",
}

function append(a: string, b: string | number): string {
	return `${a}${b}`;
}

append('The answer is: ', 42);
append('The answer is: ', 'Christopher Columbus');

function whatWillItBe(): string | number {
	const randomNumber = Math.random();

	if (randomNumber > 0.5) {
		return 4;
	} else {
		return 'Hello';
	}
}

const result = whatWillItBe();

// Narrowing
if (typeof result === 'string') {
	console.log(result.toUpperCase());
} else {
	console.log(result * 5);
}


// Generic Types

let numbers: number[] = [1, 2, 3, 4, 5];
let numbers2: Array<number> = [1, 2, 3, 4, 5, 6];
let people2: Array<Person> = [{
	name: 'John Doe',
	age: 55,
}, {
	name: 'Bob Smith',
	age: 33,
}];

interface Container<T> {
	value: T,
	set: (newValue: T) => void,
	get: () => T,
}

const numberContainer: Container<number> = {
	value: 0,
	set(newValue: number) {
		this.value = newValue;
	},
	get() {
		return this.value;
	}
}