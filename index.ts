console.log('Hello world!');

const isOpen: boolean = false;

const myName: string = 'Sean';

const myAge: number = 25;

const myList: number[] = [0, 1, 2];

const me: [string, number, boolean] = ['Sean', 25, true];

enum Job {
  WebDev,
  WebDesigner,
  PM
}

const job: Job = Job.WebDev;

const phone: any = 'iPhone 7+';
const tablet: any = 2;

// Functions in TypeScript
// ? for optional params

// const sayWord = (word?: string): string => {
//   console.log(word || 'hello');
//   return word || 'hello';
// };

// String or 'Hello'
const sayWord = (word = 'Hello', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayWord('Sean', 'Wes');

// Implicit types:
// Typescript infers type.
let newName: string | number | boolean = 'Sean Swan';
newName = 'Cinder Momo';
// newName = 2;
// newName = false;
// console.log(newName);

// Gets implicit type from the variables first declaration.
// Getting value from latest newName
let newNameTwo = newName;
// newNameTwo = 10;

// Union types with | split between multiple types
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px`;
};

makeMargin(10);
makeMargin('10');
makeMargin(false);

// Null types

let cat: string | null = 'Snowy';
cat = null;
cat = 'Snowy';
cat = undefined;
cat = 12;
cat = false;
