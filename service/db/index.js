let insert = require('./insert');
let remove = require('./remove');
let update = require('./update');
let find = require('./find');

let db = {
  insert,
  remove,
  update,
  find
}

module.exports = db;