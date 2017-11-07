// 引入模块
var mongoose = require('mongoose');
// 连接数据库
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
// cosole.log(db);
// 设置数据类型
var monSchema = new mongooose.Schema({
    name:{type:String,default:"name"},
    age:{type:Number},
    sex:{type:String}
});
// 选择集合
var monModel = db.model('user',monSchema);
var content = {name:"姓名2"};
var field = {name:1,age:1,sex:1};

// find(Conditions,fields,callback);
// $lt (小于<)
// $lte (小于等于<=)
// $gt (大于>)
// $gte (大于等于>=)
// $ne (不等于,不包含!=)
// $in (包含)
// $or (查询多个键值的任意给定值)
// $exists (判断某些属性是否存在)
// $all (全部)


// model.find(Conditions,fields,options,callback(err, doc));
monModel.find(content,field,function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log(result);
  }
  db.close();
});