'use strict';
// 块级作用域, 声明一个只读常量, 必须声明时立即初始化
// 类似 let 语句, 块级作用域, 暂时性死区, 先声明后使用, 不可重复声明

// const foo;  // Missing initializer in const declaration

if (true) {
    // console.log(MAX);   // is not defined
    const MAX = 5;
    console.log(MAX);   // true
}

// const 保证 变量指向的那个内存地址不得改动, 对于简单类型的变量时相当于常量.
// 对于复合类型的数据(对象, 数组)时, 保存的是一个指针.
const a = [];
a.push(' hello ');
a.push(' Koa ')
// a.length = 0;
console.log(a.length + a.pop() +a.pop() + a.pop());
// a = ['Dave'];   // error 不可重新指向新的地址

// 如果想让对象不可修改, 应该冻结对象
const fooo = Object.freeze({});
// fooo.prop = 123; // fooo已冻结, 不可修改
const haha = {};
haha.prop = 123;
console.log('' + haha.prop);

// ES6声明变量的方法:
// 6种: var, function, (ES5)
// let, const, import, class (ES6 新增)

// 顶层对象:  在浏览器环境 指的是 window对象, node环境 指的是 global对象
//  ES6中 var/function声明的全局变量, 依旧是顶层对象属性;
// let, const, class 声明的全局变量, 不属于顶层对象.

// REPL环境中输入:
// var b = 'abc';
// global.b    // 'abc'
// let c = 1;
// global.c    // undefined

// 使用垫片库, system.global 可以拿到全局对象
// // CommonJS的写法
// var global = require('system.global')();
//
// // ES6模块的写法
// import getGlobal from 'system.global';
// const global = getGlobal();