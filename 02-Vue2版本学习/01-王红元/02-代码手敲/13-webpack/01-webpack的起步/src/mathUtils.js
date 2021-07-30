function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

// 使用模块化思想
// 方法1：使用CommonJS导出
module.exports = {
  add,
  mul,
};
