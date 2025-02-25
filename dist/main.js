const concat = (str1, str2, str3) => str1 + str2 + str3;
const c = "Ст";
let l = "ро";
let t = "ка";
const result1 = concat(c, l, t);
console.log(result1);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(name, age, post) {
        super(name, age);
        this.post = post;
    }
}
let employee = new Employee("Имя1 ", 30, "Должность1 ");
let d1 = { name: "Имя2 ", address: "Адрес1 ", age: 3 };
const result2 = concat(d1.name, employee.post, d1.address);
console.log(result2);
const data = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
};
const dataJson = JSON.stringify(data);
console.log(dataJson);
