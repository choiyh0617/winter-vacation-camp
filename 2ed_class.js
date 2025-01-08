// console.dir(add)
// console.dir(sub)

// console.log(add(2,5))
// console.log(sub(2,5))

// function add(x,y){
//     return x+y
// }

// var sub = function(x,y){
//     return x-y
// }

// const x = 1;

// function foo() {
//     const x = 10;
//     bar();
// }
// function bar() {
//     console.log(x);
// }
// foo(); // ?
// bar(); // ?

// function outer() {
//     const outerVariable = "I'm from outer!"

//     function inner() {
//         console.log(outerVariable);
//     }

//     return inner;
// }

// const closure = outer();
// closure();

// function createAdder(a) {
//     return function add(b) {
//         console.log(a+b)
//     }
// }

// const add5 = createAdder(5);
// console.log(add5(10));
// console.log(add5(15));

// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius; 
//     };
// }
// const circle = new Circle(5);
// console.log(circle); //?
// console.log(circle.radius); //?
// console.log(circle.getDiameter()); //?
// circle.getDiameter(); //?

// function Circle(radius) {
//     if (!new.target) {
//         console.log("new 없음");
//         return new Circle(radius);
//     }
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }
    
// const circle = Circle(5);
// console.log(circle.getDiameter());

// function MyConstructor() {
//     console.log(new.target);
//     }
    
// MyConstructor();
// new MyConstructor();

// const person = {// fullName: 접근자 함수로 구성된 접근자 프로퍼티
//     firstName: "Ungmo",
//     lastName: "Lee",
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(" ");
//     },
// };
// // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
// console.log(person.firstName + " " + person.lastName);
// // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// person.fullName = "Heegun Lee";
// console.log(person);
// console.log(person.fullName);
// let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
// console.log(descriptor);
// descriptor = Object.getOwnPropertyDescriptor(person,"fullName");
// console.log(descriptor);

function CircleByPrototype(radius) {
    this.radius = radius;
}

CircleByPrototype.prototype.getArea = function () {
    return Math.PI * this.radisus ** 2;
};

// 반지름이 1인 인스턴스 생성
console.log(new CircleByPrototype(1));

console.log(new CircleByPrototype(2));

console.log(CircleByPrototype.getArea === CircleByPrototype.getArea); //true