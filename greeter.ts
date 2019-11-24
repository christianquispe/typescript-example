// function greeter(person:string) {
//     return "Hello " + person;
// };
// let user:string = "Christian Quispe";
// 
// const tweetLength = (message:string) => {
//     return "Hello " + message;
// };
// console.log(tweetLength(user));

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

enum ThemeColors {
    Primary = 'primary',
    Secondary = 'secondary',
    Dark = 'dark',
    DarkSecondary = 'darkSecondary',
}
console.log(ThemeColors.Primary);
console.log(ThemeColors.DarkSecondary);
console.log(ThemeColors.Dark);
console.log(ThemeColors.Secondary);





















class Animal2 {
    name: string;
    constructor(theName: string) { 
        this.name = theName;
    }
    move(distanceInMeters: number = 0) 
    {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal2 {
    constructor(name: string) { 
        super(name); 
    }
    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal2 {
    constructor(name: string) {
        super(name); 
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal2 = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);








class Animal3 {
    name3: string;
     constructor(theName: string) {
        this.name3 = theName; 
    }
}

let cat2 =  new Animal3("Cat3");
console.log(cat2.name3);













