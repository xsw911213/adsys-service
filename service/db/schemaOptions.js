// users集合  数据模型
let user = {
  username: {type: String},
  password: {type: String},
  role: {type: String},
  name: {type: String},
  userid: {type: Number},
  avatar: {type: String}
}

// menu集合  数据模型
let menu = {
  role: {type: String},
  menu: {type: Array, default: []}
}

// hotel集合  数据模型
let hotel = {
  // id: {type: Number},
  name: {type: String},
  contact: {type: String},
  phone: {type: String},
  time : { type:Date, default: Date.now }
  // delete: {type: Boolean, default: false}
}

// beginAd 集合数据模型
let beginAd = {
  date:{type: String},
  time:{type: String},
  adimg:{type: String},
  link:{type: String, default: null},
}

// topAd 集合数据模型
let topAd = {
  date:{type: String},
  time:{type: String},
  adimg:{type: Array, default: []},
  link:{type: Array, default: []},
}



let schemaOption = {
  user,
  menu,
  hotel,
  beginAd,
  topAd
}

module.exports = schemaOption;
