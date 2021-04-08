<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>class PromisePool {
  constructor(max, fn) {
    this.max = max; // 最大并发数
    this.fn = fn; // 自定义的请求函数
    this.pool = []; // 并发池
    this.urls = []; // 剩余的请求地址
  }
  // 开始请求时，一次性压入请求数同等的url，每次取出一条进行请求，依次循环，每完成
  start(urls) {
    this.urls = urls;
    // 先循环把并发池塞满
    while (this.pool.length < this.max) {
      let url = this.urls.shift(); // 每次从首部取出一条url
      console.log("loop");
      this.setTask(url);
    }
    // 利用Promise.race 方法来获得并发池中某任务完成的信号
    let race = Promise.race(this.pool);
    return this.run(race);
  }

  run(race) {
    // 由于是promise.race，先完成的会先触发then，此时可执行递归
    race.then((res) => {
      // 每当并发池跑完一个任务，就再塞入一个任务
      let url = this.urls.shift(); // 再次从首部取出一条url
      this.setTask(url); // 每次循环进行请求
      console.log("running");
      return this.run(Promise.race(this.pool));
    });
  }
  // 请求任务：每次获取到url后，会进行请求，请求时会将任务放入对象池，结束再移除该任务，
  setTask(url) {
    if (!url) return; // 若没有url进行请求，则中止
    let task = this.fn(url); // 将url拿去进行请求
    this.pool.push(task); // 将该任务推入pool并发池中
    console.log(`\x1B[43m ${url} 开始，当前并发数：${this.pool.length}`);
    task.then((res) => {
      // 请求结束后将该Promise任务从并发池中移除
      this.pool.splice(this.pool.indexOf(task), 1);
      console.log(`\x1B[43m ${url} 结束，当前并发数：${this.pool.length}`);
    });
  }
}

// test
const URLS = [
  "bytedance.com",
  "tencent.com",
  "alibaba.com",
  "microsoft.com",
  "apple.com",
  "hulu.com",
  "amazon.com",
];
// 自定义请求函数
var requestFn = (url) => {
  return new Promise((resolve) => {
    setTimeout((_) => {
      resolve(`任务 ${url} 完成`);
    }, 1000);
  }).then((res) => {
    console.log("外部逻辑 ", res);
    console.log("----------");
  });
};

// 一开始，将指定请求数的url放入pool请求池中，每次Promise.race的then后，
const pool = new PromisePool(3, requestFn); // 并发数为3
pool.start(URLS);
