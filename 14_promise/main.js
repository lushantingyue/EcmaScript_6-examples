'use strict'

// promise是异步编程的一种解决方案, 用于简化回调和事件
// 简单说就是一个容器, 里面保存着某个未来才会结束的事件
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});

// Promise 新建后就会立即执行
let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function () {
    console.log('Resolved.');
});

console.log('Hi!');

// 异步加载图片
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image);
        }
        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        }
        image.src = url;
    });
};

loadImageAsync("http://api.qnzs.qyibar.com/qnzs/file/player.jpg")
    .then((image) => {
        console.log(image.src);
    });

// Promise 实例返回的 resolve状态可以接另一个 Promise 实例
var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('failed')), 3000)
    // setTimeout(() => resolve('sucess'), 3000)
})
var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

// 由于p2 返回另一个promise, 其状态最终由 p1决定, 根据 p1 返回的状态决定 then语句的执行
p2
    .then(result => console.log(result))
    .catch(error => console.log(error))


var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
    });

    return promise;
};
/**
 *  3. Promise.prototype.then()
 *  then 方法第一个参数是 Resolved 状态的回调函数, 第一个参数是 Rejected状态的回调函数.
 *  then 方法可链式调用
 */
getJSON("https://movie.douban.com/subject/25864124/").then(
    post => getJSON(post.commentURL)
).then(
    comments => console.log("Resolved: ", comments),
    err => console.log("Rejected: ", err)
);