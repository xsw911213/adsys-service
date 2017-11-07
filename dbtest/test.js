let db = require('../service/db')

let dbPth = ['mongodb://127.0.0.1:27017/','test']

let schemaOption = {
  name: {type: String},
  age: {type: Number, default: 0},
  email: {type: String},
  sex: {type: String, default:'女'},
  time: {type: Date, default: Date.now}
}
let collection = 'test1'

// let data = {name: "test2", age: 58, email:"tttt@qq.com"}

let data = [
  {name: "test1", age: 8},
  {name: "test2", age: 18},
  {name: "test3", age: 28},
  {name: "test4", age: 38},
  {name: "test5", age: 48},
  {name: "test6", age: 58, email:"tttt@qq.com"},
  {name: "test7", age: 68, email:"ssss@qq.com"},
  {name: "test8", age: 18},
  {name: "test9", age: 18, email:"rrrr@qq.com"},
  {name: "test10",age: 18}
]

// 增
// dbPth: 数据库地址
// schemaOption: 数据集数据模型
// collection: 集合名称
// data: 插入的数据
// db.insert(dbPth, schemaOption, collection, data);
// db.insert(dbPth, schemaOption, collection, data);

// 删
let delConditon = {name:"test3"};
// db.remove(dbPth, schemaOption, collection, delConditon)
let oldValue = {
  name:'test1'
}
// 更新数据的时候只能更新原有的文档，新添加的文档并不能跟心
// 如：原文档为：{name:'test',age:25}，更新的时候只能更改name和age字段，如果新添加sex字段的话，并不能添加进去
let newData = {
  name: 'xushaowei1',
  age: 26,
  sex: '男'
}

// 改
// console.log(db)
db.update(dbPth, schemaOption, collection, oldValue, newData)