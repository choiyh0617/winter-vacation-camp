// //1번째 방법
// console.log(score); //undefined

// var score; //1 변수 선언
// score = 80; //2 값의 할당

// console.log(score); //80

// //2번째 방법
// console.log(score);//undefined

// var score = 80;//변수 선언과 값의 할당

// console.log(score);//80

// //3번째 방법
// console.log(score);//undefined

// score = 80;//값의 할당
// var score;//변수 선언

// console.log(score);//80

// let x = 10;
// let y = x;
// x = 20;

// const obj1 = { key: "value" };
// const obj2 = obj1;
// obj2.key = "new value";
// console.log(x, y); // 원시 값
// console.log(obj1.key, obj2.key); // 객체 값

const car = {
    brand:"Tesla",
}
car.model = "model s";
car.brand = "toyota";
// delete car.model;

console.log(car)