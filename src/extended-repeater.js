const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options) return str;

  let fullAdditionString = "";
  let fullStringForRepeat = "";
  let resultString = "";

  if (options.addition !== undefined) {
    for (i = 0; i < options.additionRepeatTimes - 1; i++) {
      fullAdditionString += options.addition;
      options.additionSeparator !== undefined ? (fullAdditionString += options.additionSeparator) : (fullAdditionString += '|');
    }
    fullAdditionString += options.addition;
  }

  fullStringForRepeat = str + fullAdditionString;

  for (i = 0; i < options.repeatTimes - 1; i++) {
    resultString += fullStringForRepeat;
    options.separator !== undefined ? (resultString += options.separator) : (resultString += "+");
  }
  resultString += fullStringForRepeat;

  return resultString;
};
