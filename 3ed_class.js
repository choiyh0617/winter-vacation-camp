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


class Counter {
    static count = 0;
    static increment() {
        Counter.count++;
    }
    static getCount() {
        return Counter.count;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2
