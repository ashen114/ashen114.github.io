<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>// ----- START:闭包 -----

// --- 1 ---
// function fn(a) {
//   fn = function (b) {
//     console.log(a + b++);
//   };
//   console.log(a++);
// }
// fn(1);
// fn(2);
// fn(3);

// --- 2 ---
// function fn1(who) {
//   let i = 2;
//   return function fn2() {
//     console.log(`${who}-fn2-i:`, ++i);
//     // let j = 2;
//     // function fn3() {
//     //   console.log(`${who}--fn3-j:`, ++j);
//     // }
//     // fn3();
//     console.log("----");
//   };
// }
// var a = fn1("a");
// a();
// a();
// var b = fn1("b");
// b();
// b();
// a();

// --- 5 ---
// let arr = [];
// for (var i = 0; i < 5; i++) {
//   arr.push(function () {
//     return i;
//   });
// }
// console.log("i:", i);
// console.log("arr[0]:", arr[0]());

// --- 6 ---
// function fn1() {
//   let n = 0;
//   this.sum = function () {
//     console.log(++n);
//   };
// }

// let a = new fn1();
// a.sum();
// a.sum();
// a.sum();
// a.sum();

// ----- END:闭包 -----

// 变量提升
// function text() {
//   function a() {}
//   var a;
//   console.log("a:", a);

//   var b = 12;
//   function b() {}
//   console.log("b:", b);

//   var c = 12;
//   function c() {}

//   var c;
//   console.log("c:", c);
// }
// text();

// --- 3 ---
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i++);
//   }, 1500);
// }
// console.log("i:", i);

// --- 4 ---
// for (var i = 0; i < 5; i++) {
//   var a = function () {
//     var j = i;
//     setTimeout(function () {
//       console.log(++j);
//     }, 500);
//   };
//   a();
// }
