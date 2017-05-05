/**
 * Created by Administrator on 2017/5/5.
 */
'use strict'

/**
 * 对象的解构赋值与数组的不同: 对象的属性不按次序, 必须按照属性同名取值赋值
 */
let { bar, foo } = { foo: "aaa", bar: "bbb" };// 不需按次序
foo // "aaa"
bar // "bbb"

let { baz, prop} = { prop: "a", bar: "bbb" };   // 没有对应属性名
baz // undefined
prop
