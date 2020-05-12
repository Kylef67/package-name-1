const crypto = require("crypto");

const myRandom = () => {
  return crypto.randomBytes(16).toString("hex");
};

module.exports = myRandom;
