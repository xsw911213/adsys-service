// 修改数据方法


// 连接数据库
// dbPth: 数据库地址
// schemaOption: 数据集数据模型
// collection: 集合名称
// oldValue: 查找要修改的数据的值
// newData: 新修改的数据
let updateFun = function (dbPth, schemaOption, collection, oldValue, newData, errFun=console.log ,successFun=console.log){
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

  var newData1 = {$set:newData};
  // 更新数据
  monModel.update(oldValue,newData,function(err,result){
    if(err){
      console.log('更新失败！');
      errFun(err)
    }else{
      console.log('更新成功！');
      successFun(result)
    }
    db.close();
  });

}

module.exports = updateFun;


// 修改的时候只修改第一个符合条件的数据
// 更新数据的时候只能更新原有的文档，新添加的文档并不能跟心
// 如：原文档为：{name:'test',age:25}，更新的时候只能更改name和age字段，如果新添加sex字段的话，并不能添加进去