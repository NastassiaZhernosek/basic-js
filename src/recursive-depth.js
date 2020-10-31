const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const nextArrayDepth = this.calculateDepth(arr[i]) + 1;
        if (nextArrayDepth > depth) {
          depth = nextArrayDepth;
        }
      }
    }
    return depth;
  }
};
