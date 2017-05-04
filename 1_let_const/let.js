/**
 *  let 语句 , Ecma 6 新增
 */
// 1. 块级作用域, 块外失效
{
    let a = 10
    var b = 1
    console.log(a)
}
// console.log(a)      // is false
console.log(b)

// 2. var 语句会发生变量提升
// let:不存在变量提升, 变量必须先声明后使用

console.log(foo)
var foo = 2

// console.log(bar)  // bar is not defined
let bar = 2

// 暂时性死区:
// ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，
// 从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
var tmp = 123;

if (true) {
    // tmp = 'abc'; // ReferenceError
    let tmp = '';
}

(function fn() {
    console.log("hello koa")
}())