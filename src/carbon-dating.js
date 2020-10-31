const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let age = 0;

  if (
    sampleActivity = null 
    || sampleActivity === ''
    || +sampleActivity > 15
    || +sampleActivity < 0
    || typeof (+sampleActivity) !== Number
  ) return false;

  let result = ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD / 0.693);
};
