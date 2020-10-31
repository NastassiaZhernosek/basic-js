const CustomError = require("../extensions/custom-error");

const chainMaker = {
  newChain: [],

  getLength() {
    return this.newChain.length;
  },
  addLink(value) {
    this.newChain.push(value);
    return this;
  },
  removeLink(position) {
    if (position < this.getLength()) {
      this.newChain.splice(position - 1, 1);
    } else {
      this.newChain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.newChain.reverse();
    return this;
  },
  finishChain() {
    const finishedChain = this.newChain.map(val => val === null ? '( null )' : `( ${val} )`).join("~~");
    this.newChain = [];
    return finishedChain;
  }
};

module.exports = chainMaker;
