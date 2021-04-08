<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>/**
 * @fileOverview js联系
 * @author ashen
 * @version 20201018
 */

/**
 * @date 2020/10/18
 * @description
 * Person = { name:'ashen',getName:function(){ console.log(this.name) } }
 * Person.name发生变化时立即执行Person.getName
 */
// 方法一
let Person = {
  value: "",
  get name() {
    return this.value;
  },
  set name(name) {
    this.value = name;
    this.getName();
  },
  getName: function () {
    console.log(this.name);
  },
};
Person.name = "abc";

// 方法二
let Person = {
  value: "",
  getName: function () {
    console.log(this.name);
  },
};
Object.defineProperty(Person, "name", {
  enumerable: true,
  configurable: true,
  get() {
    return this.value;
  },
  set(name) {
    this.value = name;
    this.getName();
  },
});
Person.name = "sss";

// 方法三
let Person = {
  name: "",
  getName: function () {
    console.log(this.name);
  },
};
let Ashen = new Proxy(Person, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    let res = Reflect.set(target, key, value, receiver);
    target.getName();
    return res;
  },
});
Ashen.name = "ashen";

/**
 * @date 2020/10/17
 * @description 将中文数字转换为数字
 */

// 方法一
function ChineseToNumber(str) {
  const numChar = {
    零: 0,
    壹: 1,
    贰: 2,
    叁: 3,
    肆: 4,
    伍: 5,
    陆: 6,
    柒: 7,
    捌: 8,
    玖: 9,
  };
  const levelChar = {
    拾: 10,
    佰: 100,
    仟: 1000,
    万: 10000,
    亿: 100000,
  };
  let ary = Array.from(str);
  let temp = 0;
  let sum = 0;
  for (let i = 0; i < ary.length; i++) {
    let char = ary[i];
    if (char == "零") continue;
    if (char === "亿" || char === "万") {
      sum += temp * levelChar[char];
      temp = 0;
    } else {
      let next = ary[i + 1];
      if (next && next !== "亿" && next !== "万") {
        temp += numChar[char] * levelChar[next];
        i++;
      } else {
        temp += numChar[char];
      }
    }
  }
  return sum + temp;
}

// 方法一 测试用例
const testPair = [
  [0, "零"],
  [1, "壹"],
  [2, "贰"],
  [3, "叁"],
  [4, "肆"],
  [5, "伍"],
  [6, "陆"],
  [7, "柒"],
  [8, "捌"],
  [9, "玖"],
  [10, "壹拾"],
  [100, "壹佰"],
  [100, "壹佰零贰"], // false
  [110, "壹佰壹拾"],
  [111, "壹佰壹拾壹"],
];
function testChineseToNumber() {
  for (let i = 0; i < testPair.length; i++) {
    let num = ChineseToNumber(testPair[i][1]);
    console.log(num == testPair[i][0]);
  }
}
testChineseToNumber();

/**
 * @date 2020/10/16
 * @description 输入一个数字，找到对应的字母
 */
// 方法一
function findLetterAccoringToNum(num) {
  let str = "";
  // 求余数，决定结果的最后一位字母
  let remainer = num % 26;
  // 求商，一共循环几轮字母表，决定结果除最后一位一共显示多少个'a'
  let quotient = Math.floor(num / 26);
  // 如果remainer为0，说明最后一位是'z'
  if (remainer === 0) {
    remainer = 16;
    quotient--;
  }
  while (quotient >= 1) {
    str += "a";
    quotient--;
  }
  // 根据unicode编码求字母，如a:97 = 1 + 96;z:122 = 26 + 96
  str += String.fromCharCode(remainer + 96);
  return str;
}
console.log(findLetterAccoringToNum(10));
