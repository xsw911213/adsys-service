let insert = require('./insert');
let remove = require('./remove');
let update = require('./update');

let db = {
  insert,
  remove,
  update
}

module.exports = db;