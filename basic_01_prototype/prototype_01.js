'use strict'
/*
 * 深入理解原形链
 */
// 构造函数创建对象
function Person() {
}
var person = new Person();
person.name = 'Kevin';
console.log(person.name) // Kevin
// 概念1: prototype
Person.prototype.name = 'Jenkin';
var person1 = new Person();
var person2 = new Person();
// prototype是函数才会有的属性
console.log(person1.name);
console.log(person2.name);

// 函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型
// 比喻: 如果说对象实例是产品, 那么原型就是生产图纸, 构造函数就是工厂

// 概念2:对象的原型属性 __prototype__
// 实例对象和构造函数都可以指向原型
console.log(person1.__proto__ === Person.prototype);    // true

// 概念3: constructor
// 每个原型都有一个 constructor 属性指向关联的构造函数。
console.log(Person === Person.prototype.constructor);   // true

// 实例与原型
// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。
console.log(Person.prototype.__proto__);

// 继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，
// JavaScript 只是在两个对象之间创建一个关联，
// 这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。
// JavaScript深入系列目录地址：https://github.com/mqyqingfeng/Blog