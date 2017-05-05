'use strict'
// ES6允许按照一定的模式, 从数组或对象提取值, 对变量赋值, 这被称为解构 (Destructuring).
// ES6 之前:
// let a = 1;
// let b = 2;
// let c = 3;
// ES6 写法:
let [a, b, c] = [1, 2, 3];

// 数组的解构赋值
// 只要某种数据结构具有iterator接口,都可以采用数组形式解构赋值
let [x, y, z] = new Set(['a', 'b', 'c']);
// 解构赋值允许指定默认值
let [foo = true] = [];
foo;    // true
// 默认值为表达式, 则执行惰性求值
function f() {
    console.log('aaa');
}
let [xx = f()] = [1];