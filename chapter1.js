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
var heroes = [];
function find(filter) {
  return function (arr) {
    return arr.filter(filter);
  };
}
var findSpiderMan = find(function (h) {
  return h.name === "SpderMan";
});
var spiderman = findSpiderMan(heroes);
// lambda experssions
// expressions that can be used to declare anonymous functions (without a name)
// Before ES6 specification, the only way to assing a function as a value was
// to use function expressions.
// const log = function (arg: any) {
//   console.log(arg);
// };
var log = function (arg) {
  return console.log(arg);
};
// function arity
// The arity of a function is the number of arguments that the function takes.
// a unary function is a function that only takes a single argument
function isNull(a) {
  return a === null;
}
// a binary function is a function that takes two arguments
// function add(a: number, b: number) {
//   return a + b;
// }
function addMany() {
  var numbers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    numbers[_i] = arguments[_i];
  }
  numbers.reduce(function (p, c) {
    return p + c;
  }, 0);
}
// higher order functions
// a higher order function is a function that does at least one of the following
// takes one or more functions as arguments
// returns a function as its result
function addDelay(msg, ms) {
  return function () {
    setTimeout(function () {
      console.log(msg);
    }, ms);
  };
}
function sayHello(msg) {
  console.log(msg);
  return msg;
}
var delayedSayHello = addDelay(sayHello("Hello world"), 3);
delayedSayHello();
// abstract (remove extract)
// agnostic
// laziness
// many functional programming languages feature lazy evaluated APIs.
// The idea behind lazy evaluation is that operations are not computed until doing so can longer be postponed.
function lazyFind(arr, filter) {
  var hero = null;
  var proxy = new Proxy(
    {},
    {
      get: function (obj, prop) {
        console.log("filtering.....");
        if (!hero) {
          hero = arr.find(filter) || null;
        }
        return hero ? hero[prop] : null;
      },
    }
  );
  return proxy;
}
console.log("A");
var spidr = lazyFind(heroes, function (h) {
  return h.name === "Spiderman";
});
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
var greetUnnamed = function (name) {
  return "Hi ".concat(name);
};
function greetUser(name) {
  if (name) {
    return "Hi" + name;
  } else {
    return "Hi!";
  }
}
var greetUser2 = function (name) {
  if (name) {
    return "Hi" + name;
  } else {
    return "Hi!";
  }
};
var greet = function (name) {
  if (name) {
    return "Hi" + name;
  } else {
    return "Hi";
  }
};
// function add(a, b, callback) {
//   callback(a + b);
// }
// // funtion declaration
// function HelloUser(name) {
//   return "Hi ".concat(name);
// }
// // function expression
// var HelloThere = function (name) {
//   return "hi ".concat(name);
// };

// console.log(NamePlanets("Mars")); // works
// console.log(NameRivers("Nile")); // Error

// function NamePlanets(planet) {
//   return `Planet ${planet}.`;
// }

// let NameRivers = function (rivers) {
//   return `River ${rivers}.`;
// };

function foo() {
  if (true) {
    const bar = 0;
  }
  console.log(bar);
}
foo();
