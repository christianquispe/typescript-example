// function greeter(person:string) {
//     return "Hello " + person;
// };
// let user:string = "Christian Quispe";
// 
// const tweetLength = (message:string) => {
//     return "Hello " + message;
// };
// console.log(tweetLength(user));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface Person {
//     firstName: string;
//     lastName: string;
//     alias: string;
//     verdad: boolean
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName + "";
// }// 
// let user = { 
//     firstName: "Christian", 
//     lastName: "Quispe",
//     alias: "ElCribis",
//     verdad: true
// };
// if (user.verdad) {
//     console.log("Es verdad!");  
// } else {
//     console.log("Es falso!");
// }
// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
// 
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// 
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// 
// let user = new Student("Jane", "M.", "User");
// let hacker: string = "L";
// 
// const tweetLength = (message = 'A default tweet') => {
//     console.log(message.length);
//     return message.length
// };
// 
// const jaja = () => {
//     console.log(hacker);
//     return hacker
// }
// 
// 
// console.log(tweetLength());
// console.log(jaja());
// document.body.textContent = greeter(user);}
// class Greeter {
//     greeting: string;
//     age: number;
//     constructor(message: string, age: number) {
//         this.greeting = message;
//         this.age = age;
//     }
//     greet() {
//         return `Hello, ${this.greeting}, you have ${this.age} years.` ;
//     }
// }
// 
// let greeter = new Greeter("Christian", 18);
// console.log(greeter.greet());
// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
// 
// class Cat extends Animal{
//     bark() {
//         console.log(`Miau! Miau!`);
//     }
// }
// 
// 
// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }
// 
// const cat = new Cat();
// cat.bark();
// cat.move();
// cat.bark();
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();
//  enum Sizes {
//      Small,
//      Medium,
//      Large,
//  }
//  console.log(Sizes.Small);
//  console.log(Sizes.Medium);
//  console.log(Sizes.Large);
var ThemeColors;
(function (ThemeColors) {
    ThemeColors["Primary"] = "primary";
    ThemeColors["Secondary"] = "secondary";
    ThemeColors["Dark"] = "dark";
    ThemeColors["DarkSecondary"] = "darkSecondary";
})(ThemeColors || (ThemeColors = {}));
console.log(ThemeColors.Primary);
console.log(ThemeColors.DarkSecondary);
console.log(ThemeColors.Dark);
console.log(ThemeColors.Secondary);
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name3 = theName;
    }
    return Animal3;
}());
var cat2 = new Animal3("Cat3");
console.log(cat2.name3);
