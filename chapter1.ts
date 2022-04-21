// main characteristics of functional programming
//  main benefits of functional programming
// pure functions
// side-effects
// immutability
// function arity
// Higher order functions
// Laziness

// imperative programming
// is a programming paradigm that uses statements that change a program's state. In much the same way that the imperative mood in
// natural language expresses commands, an imperative program consists of commands for the computer to perform, imperative programming
//  focuseson describing how a program operates

// declarative programming
// is a programming paradigm that expresses the logic of computation
// without describing it's control flow. Many languages that apply this stylec
// attempt to minimize or eliminate side effects by describing what the program must accomplish in terms of the problem domain, rather than describing how
// to accomplish it as a sequence of steps.
// const add = (a: number, b: number) => a + b;
// const addMany = (...args: number[]) => args.reduce(add, 0);
// const div = (a: number, b: number) => a / b;
// const mapProp = <T>(k: keyof T, arr: T[]) => arr.map((a) => a[k]);
// const avg = (arr: number[]) => div(addMany(...arr), arr.length);

// interface Result {
//   id: number;
//   result: number;
// }

// const results: Result[] = [
//   { id: 1, result: 64 },
//   { id: 2, result: 87 },
//   { id: 3, result: 89 },
// ];

// const resultsAvg = avg(mapProp("result", results));
// console.log(resultsAvg);
// function find<T>(arr: T[], filter: (i: T) => boolean) {
//   return arr.filter(filter);
// }
const heroes = [];
interface Hero {
  name: string;
  powers: string[];
}

function find<T>(filter: (i: T) => boolean) {
  return (arr: T[]) => {
    return arr.filter(filter);
  };
}

const findSpiderMan = find((h: Hero) => h.name === "SpderMan");
const spiderman = findSpiderMan(heroes);

// lambda experssions
// expressions that can be used to declare anonymous functions (without a name)
// Before ES6 specification, the only way to assing a function as a value was
// to use function expressions.

// const log = function (arg: any) {
//   console.log(arg);
// };
const log = (arg: any) => console.log(arg);

// function arity
// The arity of a function is the number of arguments that the function takes.
// a unary function is a function that only takes a single argument
function isNull<T>(a: T | null) {
  return a === null;
}

// a binary function is a function that takes two arguments
// function add(a: number, b: number) {
//   return a + b;
// }

function addMany(...numbers: number[]) {
  numbers.reduce((p, c) => p + c, 0);
}

// higher order functions
// a higher order function is a function that does at least one of the following
// takes one or more functions as arguments
// returns a function as its result

function addDelay(msg: string, ms: number) {
  return () => {
    setTimeout(() => {
      console.log(msg);
    }, ms);
  };
}

function sayHello(msg: string): string {
  console.log(msg);
  return msg;
}

const delayedSayHello = addDelay(sayHello("Hello world"), 3);
delayedSayHello();
// abstract (remove extract)
// agnostic

// laziness
// many functional programming languages feature lazy evaluated APIs.
// The idea behind lazy evaluation is that operations are not computed until doing so can longer be postponed.

function lazyFind<T>(arr: T[], filter: (i: T) => boolean): T {
  let hero: T | null = null;
  const proxy = new Proxy(
    {},
    {
      get: (obj, prop) => {
        console.log("filtering.....");
        if (!hero) {
          hero = arr.find(filter) || null;
        }
        return hero ? (hero as any)[prop] : null;
      },
    }
  );
  return proxy as any;
}
console.log("A");
const spidr = lazyFind(heroes, (h) => h.name === "Spiderman");
console.log("B");
console.log(spidr.name);
console.log("C");

/*
    A
    B
    Filtering...
    Spiderman
    C
*/

let greetUnnamed: (name: string) => string = (name: string): string =>
  `Hi ${name}`;

function greetUser(name?: string): string {
  if (name) {
    return "Hi" + name;
  } else {
    return "Hi!";
  }
}

let greetUser2 = function (name?: string): string {
  if (name) {
    return "Hi" + name;
  } else {
    return "Hi!";
  }
};

let greet: (name: string) => string = function (name: string): string {
  if (name) {
    return "Hi" + name;
  } else {
    return "Hi";
  }
};

function add(a: number, b: number, callback: (result: number) => void) {
  callback(a + b);
}
