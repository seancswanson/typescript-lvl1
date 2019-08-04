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

const sayWord = (word = 'Hello', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayWord('Sean', 'Wes');
