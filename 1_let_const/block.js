'use strict';
// ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。
// ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
function f() { console.log('I am outside!'); }

(function () {
    // 重复声明一次函数f
    if(true) {
        // 块作用域的函数
        function f() {console.log('I am inside!');}
        f();
    }
    f();
}());

// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。
// 如果确实需要，也应该写成函数表达式，而不是函数声明语句。
// 函数声明语句
{
    let a = 'secret';
    function f() {
        return a;
    }
}

// 函数表达式
{
    let a = 'secret';
    let f = function () {
        return a;
    };
}

