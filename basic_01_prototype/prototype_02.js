'use strict'
/*
 * 深入理解原形链
 */
// 通过原形链实现继承
// 1. 普通对象的继承
var a = {
    x: 10,
    caculate: function (z) {
        console.log(this.x + this.y + z);
    }
};

var b = {
    y: 20,
    __proto__: a
};

var c = {
    y: 30,
    __proto__: a
};

// 对象b, c通过__proto__属性指向 对象a, 实现了继承
b.caculate(30);
c.caculate(40);

// 函数对象的继承
function Animal() {};
Animal.prototype.species = '猫科';

function Cat(name, color) {
    this.name = name;
    this.color = color;
};

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat('加菲', '橘黄黑');
console.log(cat1.species + ': ' + cat1.name + '/' + cat1.color);