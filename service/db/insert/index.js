// 插入数据方法

// 连接数据库
// dbPth: 数据库地址
// schemaOption: 数据集数据模型
// collection: 集合名称
// data: 插入的数据
let insertFun = function(dbPth, schemaOption, collection, data, errFun=console.log, successFun=console.log){
  
  let mongoose = require('mongoose');
  // 链接数据库
  // let db = mongoose.connect(dbPth);
  let db = mongoose.createConnection(dbPth.join(''))
  db.on('error', function(error) {
    console.log('连接 '+dbPth[1]+' 数据库的 '+collection+' 集合失败：' + error);
    db.close();
  });

  console.log('连接 ' + dbPth[1] + ' 数据库的 ' + collection + ' 集合成功');
  // 设置数据类型
  let monSchema = new mongoose.Schema(schemaOption);
  // 选择集合
  let monModel = db.model(collection, monSchema);
  // 插入数据
  monModel.create(data, function (error, result) {
    if(error){
      console.log('插入失败！');
      errFun(error)
    }else{
      console.log('插入成功！');
      successFun(result)
    }
    db.close();
  })
  
}

module.exports = insertFun;

// var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
// 设置数据类型
// var monSchema = new mongoose.Schema({
//     name:{type:String,default:"username"},
//     age：{type:Number},
//     sex:{type:String}
// });
// 选择集合
// var monModel = db.model('user',monSchema);
// 数据集
// var content = {name:"Nick",age:23,sex:'男'};
// 
