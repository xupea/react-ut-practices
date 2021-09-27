import { truncateAndPadTrailingZeros } from "./utils";

describe("truncateAndPadTrailingZeros()", () => {
  it.each([
    [["0", "99"], 0.99, "(整数部分为0时也应返回)"],
    [["5", "00"], 5, "(小数部分不足时应该补0)"],
    [["5", "10"], 5.1, "(小数部分不足时应该补0)"],
    [["4", "38"], 4.38, "(小数部分不足时应该补0)"],
    [["4", "99"], 4.994, "(超过默认2位的小数的直接截断，不四舍五入)"],
    [["4", "99"], 4.995, "(超过默认2位的小数的直接截断，不四舍五入)"],
    [["4", "99"], 4.996, "(超过默认2位的小数的直接截断，不四舍五入)"],
    [["-0", "50"], -0.5, "(整数部分为负数时应该保留负号)"],
  ])(
    "should return %s when number is %s (%s)",
    (expected, input, description) => {
      expect(truncateAndPadTrailingZeros(input)).toEqual(expected);
    }
  );
});
