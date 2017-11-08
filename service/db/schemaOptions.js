let user = {
  username: {type: String},
  password: {type: String},
  role: {type: String},
  name: {type: String},
  userid: {type: Number},
  avatar: {type: String}
}

let menu = {
  role: {type: String},
  menu: {type: Array, default:[]}
}


let schemaOption = {
  user,
  menu
}

module.exports = schemaOption;
