<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>// 1
var name = "发工资";
function fn() {
  this.name = "不发";
  console.log(this.name);
  // 不返回任何
}
fn();

// 2
var name = "发工资";
function fn() {
  this.name = "不发";
  console.log(this.name);
  return this; // 返回this
}
fn().name;

// 3
var name = "发工资";
function fn() {
  this.name = "不发";
  console.log(this.name);
  return name; // 返回name
}
fn().name;

// 4
var name = "发工资";
function fn() {
  this.name = "不发";
  console.log(this.name);
  return this; // 返回this
}
fn().name;

// 5
var fn = {
  name: "不发",
};
console.log(fn.name);

// 6
var fn = function () {
  var name = function () {
    console.log("不发");
  };
  return name;
};
fn()();
fn().name();

// 7
var fn = function () {
  this.name = function () {
    console.log("不发");
  };
  return this;
};
fn()();
fn().name();

// 8
for (let i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log("let-i:", i);
  });
}
for (var i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log("var-i:", i);
  });
}

// 9
var a = Object.create({ name: "不发" });
var b = a;
delete b.name;
var c = b;
console.log(b.name);
console.log(a.name);
console.log(c.name);

// 10
// 数组过滤重复

// 11
// session，cookie，localstorage区别

// 12
// typeof检测的类型

// 13
// 清除浮动

// 14
var arr = [0, 1, "2", true, [], false, {}, null];

console.log(arr.filter(Number));
console.log(arr.filter(Array));
console.log(arr.filter(String));
console.log(arr.filter(Boolean));
console.log(arr.filter(Object));

// 15
function* test() {
  yield console.log([1, 2, 3, 4]);
}
test().next().value;

function* test() {
  yield* console.log([1, 2, 3, 4]);
}
test().next().value;

// 16
// Promise原理及优缺点
