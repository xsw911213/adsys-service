var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/test');
db.connection.on('error', function(error){
  console.log('数据库test连接失败：' + error);
});
db.connection.on('open', function(){
  console.log('数据库test连接成功');
  var testSchema = new mongoose.Schema({
	  name: {type: String},
	  age: {type: Number, default: 0},
	  email: {type: String},
	  time: {type: Date, default: Date.now}
	});
	var testModel = db.model('test1', testSchema); // 集合名称；集合的结构对象
	// Document文档（关联数组式的对象） < Collection集合 < 数据库
	// 插入保存一段数据
	testModel.create([
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
	], function (error, docs) {
	  if(error) {
	    console.log(error);
	  } else {
	    console.log('save ok');
	    console.log(docs);

	    setTimeout(function(){
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

				// 省略或为空、返回所有记录；只包含name,age字段，去掉默认的_id字段；执行回调函数
				testModel.find({}, {name:1, age:1, _id:0}, function(err, docs){
				  if (err) {
				    console.log('查询出错：' + err);
				  } else {
				    console.log('{}查询结果为：');
				    console.log(docs);
				  }
				});

				// 查询age大于等于28，小于等于48
				testModel.find({age: {$gte: 28, $lte: 48}}, {name:true, age:true, _id:false}, function(err, docs){
				  if (err) {
				    console.log('查询出错：' + err);
				  } else {
				    console.log('$gte(28),$lte(48)查询结果为：');
				    console.log(docs);
				  }
				});

				// 查询age为58、68的2条数据
				testModel.find({age: {$in: [58, 68]}}, {name:1, age:1, _id:0}, function(err, docs){
				  if (err) {
				    console.log('查询出错：' + err);
				  } else {
				    console.log('$in查询结果为：');
				    console.log(docs);
				  }
				});

				// 查询name为test3、或者age为18的全部数据
				testModel.find({$or: [{name: 'test3'}, {age: 18}]}, {name:1, age:1, _id:0}, function(err, docs){
				  if (err) {
				    console.log('查询出错：' + err);
				  } else {
				    console.log('$or查询结果为：');
				    console.log(docs);
				  }
				});

				// step3：游标查询
				// 查询name为test3、或者age为18的全部数据；但限制只查询2条数据
				testModel.find({$or: [{name: 'test3'}, {age: 18}]}, {name:1, age:1, _id:0}, {limit: 2}, function(err, docs){
				  if (err) {
				    console.log('查询出错：' + err);
				  } else {
				    console.log('limit查询结果为：');
				    console.log(docs);
				  }
				});
	    },1000)
	  }
	});
});

