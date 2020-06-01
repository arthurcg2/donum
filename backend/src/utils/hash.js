const bcrypt = require("bcrypt");

function makeHash(data, loops = 10) {
  return bcrypt.hash(data, loops);
}

function compareToHash(plainData, hash) {
  return bcrypt.compare(plainData, hash);
}

module.exports = {
  makeHash,
  compareToHash,
};
