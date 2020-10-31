const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let res = [];
  if (!Array.isArray(arr)) throw Error;

  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (i + 1 < arr.length) {
          res.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i > 0 && arr[i - 2] !== "--discard-next") {
          res.push(arr[i - 1]);
        }
        break;
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (i > 0  && arr[i - 2] !== "--discard-next") {
          res.pop(arr[i - 1]);
        }
        break;
      default:
        res.push(arr[i]);
        break;
    }
  }

  return res;
};
