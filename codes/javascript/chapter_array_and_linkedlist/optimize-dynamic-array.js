// 每次扩容数组
function test1() {
  let res = [];

  for (let i = 0; i < 10000; i++) {
    res.push({
      name: "haha",
    });
  }
}

// 事先分配好数组空间 (前提是已经知道了需要分配多少空间)
function test2() {
  let res = new Array(10000);

  for (let i = 0; i < 10000; i++) {
    res[i] = {
      name: "haha",
    };
  }
}

console.time();

test1();

console.timeEnd();

console.time();

test2();

console.timeEnd();
