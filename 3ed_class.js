// class Shape {
//     constructor(name) {
//         this.name = name;
//     }
//     toString() {
//         return `Shape: ${this.name}`;
//     }
// }

// class Circle extends Shape {
//     constructor(name, radius) {
//         super(name); 
//         this.radius = radius;
//     }
//     toString() {
//         return `${super.toString()} with radius: ${this.radius}`;
//     }
// }

// const circle = new Circle('Circle', 5);
// console.log(circle.toString()); // Shape: Circle with radius: 5


// class Counter {
//     static count = 0;
//     static increment() {
//         Counter.count++;
//     }
//     static getCount() {
//         return Counter.count;
//     }
// }

// Counter.increment();
// Counter.increment();
// console.log(Counter.getCount()); // 2

// const obj = {
//     name: 'Alice',
//     arrow: function() {
//         console.log(`Hello, ${this.name}`)
//     }
// };

// obj.arrow();

// function greet(name = 'Guest') {
//     console.log(`Welcome, ${name}`);
// }

// greet(); // Welcome, Guest

// function sum(...rest) {
//     return rest.reduce((a, b) => a + b, 0);
// }
//     console.log(sum(1, 2, 3)); // 6
//     console.log(sum(4, 5, 6, 7)); // 22

// function outerFunction() {
//     const innerArrow = () => {
//         return Array.from(arguments)
//     }
//     console.log(innerArrow());
//     }
// outerFunction(1, 2, 3); // [1, 2, 3]

function average(...rest) {
    return (rest.reduce((a, b) => a + b, 0))/rest.length;
    }
    console.log(average(10, 20, 30)); // 20
    console.log(average(5, 15, 25, 35)); // 20