/**
 * 我们期望 util 都是纯函数，即是不依赖外部状态、不改变参数值、不维护内部状态的函数。这样的函数测试效率也非常高。
 * 参数化测试
 */

export const truncateAndPadTrailingZeros = (num) => {
  const result = num * 100;
  const arr = `${Math.floor(result) / 100}`.split(".");

  if (arr.length === 1) {
    arr.push("00");
  }

  arr[1] = arr[1].padEnd(2, "0");

  return arr;
};
