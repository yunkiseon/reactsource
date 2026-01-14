const array = [10, 11, 12];

// 배열 분해
let arr1 = array[0];
let arr2 = array[1];
let arr3 = array[2];

console.log(arr1, arr2, arr3);

const [arr4, arr5] = array;
console.log(arr4, arr5); // 앞의 값만 담김

const [arr6, ...arr7] = array;
console.log("연산자");
console.log(arr6);
console.log(arr7);

// 복제
// 얕은 복제 vs 깊은 복제
const array2 = array;
console.log("복사된 array2", array2);

array2[0] = 88;
console.log("값 변경 이후 array2", array2);
console.log("값 변경 이후 array", array);
// 원본 보존 불가능 -> 얕은 복제(같은 주소 공유)

// 깊은 복제 값복사
const array3 = [...array];
array3[0] = 15;
console.log("값 변경 후 array3", array3);
console.log("값 변경 후 array", array);

const person = {
  name: "John",
  age: 30,
  job: "developer",
};
console.log(person.name);

// 분해

const { name, age } = person;
console.log(name, age);

// 얕은 복사
const person1 = person;
person1.name = "jane";

console.log("person1 변경 후 person1", person1.name);
console.log("person1 변경 후 person", person.name);

// 깊은 복사
const person2 = { ...person };
person2.name = "길길길";
console.log("person1 변경 후 person2", person2.name);
console.log("person1 변경 후 person", person.name);
