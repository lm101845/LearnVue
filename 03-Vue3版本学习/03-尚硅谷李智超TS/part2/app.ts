// console.log('hello');
// let a = 10;
// let m = 33;
// let n = 'hello'
console.log(m);
console.log(n);
// let haha = 77;

// function fn(a, b) {
//     return a + b
// }

function fn2(this: Window) {
    alert(this)
}

// let box1 = document.getElementById(Element: 'box1');

// box1.addEventListener(type: 'click', listener: function () {
//     alert('hello')
// })

// box1有可能不存在