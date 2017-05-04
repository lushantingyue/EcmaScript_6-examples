/**
 *  let 语句 , Ecma 6 新增
 */
// 1. 块作用域, 块外失效
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

