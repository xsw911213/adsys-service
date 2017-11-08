// 引入模块

// 连接数据库
// dbPth: 数据库地址
// schemaOption: 数据集数据模型
// collection: 集合名称
// conditions: 查询条件
// fields: 返回结果的字段过滤条件
// options: 游标
let findFun = function(dbPth, schemaOption, collection, conditions, fields, options, errFun=console.log, successFun=console.log) {
  
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

  // model.find(Conditions,fields,options,callback(err, doc));
  monModel.find(conditions, fields, options, function (err,result) {
    if(err){
      console.log('查询失败！');
      errFun(err)
    }else{
      console.log('查询成功！');
      successFun(result)
    }
    db.close();
  });

}

module.exports = findFun;
// find(Conditions,fields,callback);



