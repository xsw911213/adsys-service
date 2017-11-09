// 删除数据方法

// dbPth: 数据库地址
// schemaOption: 数据集数据模型
// collection: 集合名称
// data: 删除的数据
let removeFun = function (dbPth, schemaOption, collection, delConditions, errFun=console.log ,successFun=console.log){
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
  // 删除数据
  monModel.remove(delConditions,function(err,result){
    if(err){
      console.log('删除失败！');
      errFun(err)
    }else{
      console.log('删除成功！');
      successFun(result)
    }
    db.close();
  });

}

module.exports = removeFun;

// 会删除所有符合条件的数据
