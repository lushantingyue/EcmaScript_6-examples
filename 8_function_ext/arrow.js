/**
 * Created by Administrator on 2017/5/5.
 */
'use strict'

/**
 *  箭头函数: ES6 允许使用 => 定义函数
 */

// 箭头左边是入参, 箭头右边是返回值
var f = v => v * v;   // 相当于 var f =  function(v) { return v*v; };
var value = f(2);   // 4

// 多个参数
var sum = (num1, num2) => num1 + num2;
// 相当于
// var sum = function (num1, num2) {
//     return num1 + num2;
// }

var plus = sum(2, 3) // 5

// 与变量解构结合使用
var full = ({first, last}) => first + ' ' + last;

var fullname = full({first: 'hello', last: 'world'});

//  应用: 箭头函数的一个用处是简化回调函数。
[1, 2, 3].map(function (x) {
    return x * x;
});
// 简化为
var arr = [1, 2, 3].map(x => x * x);    //  [1 , 4, 9]

// 嵌套的箭头函数