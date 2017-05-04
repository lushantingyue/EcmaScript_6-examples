'use strict';
// 块级作用域, 声明一个只读常量, 必须声明时立即初始化
// 类似 let 语句, 块级作用域, 暂时性死区, 先声明后使用, 不可重复声明

// const foo;  // Missing initializer in const declaration

if (true) {
    // console.log(MAX);   // is not defined
    const MAX = 5;
    console.log(MAX);   // true
}

// const 保证 变量指向的那个内存地址不得改动