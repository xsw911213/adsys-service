// 酒店设置接口
// 包含GET、POST、DELETE三种方法

let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function getHotelInfo(userinfoRromClient,res){
  let collection = 'hotels';

  let condidtion = {};
  
  // name: {type: String},
  // contact: {type: String},
  // phone: {type: String},
  // time : { type:Date, default: Date.now }
  let fields = {
    _id: true,
    name: true,
    contact: true,
    phone: true,
    time: true
  }

  let resData = {}

  function error(err){
    console.log(collection, err)
  }
  // 数据库查询成功
  function succ(result){
    console.log(collection, result)

    // let userinfoRromDB = result[0];

    resData =  {
      status : "success",
      data : result
    }

    res.json(resData)

  }

  db.find(dbPth, schemaOptions.hotel, collection, condidtion, fields, null, error, succ);

}

function postHotelInfo(userinfoRromClient,res){
  let collection = 'hotels';
  // console.log(userinfoRromClient)
  let data = userinfoRromClient;
  function error(err){
    console.log(collection, err)
  }
  // 数据库查询成功
  function succ(result){
    console.log(collection, result)

    resData =  {
      status : "success"
    }
    res.json(resData)
  }
  db.insert(dbPth, schemaOptions.hotel, collection, data, error, succ);
}

function deleteHotelInfo(userinfoRromClient,res){
  let collection = 'hotels';
  console.log(userinfoRromClient)

  let delConditions = { _id: { $in: userinfoRromClient.idcollection } }

  function error(err){
    console.log(collection, err)
  }
  // 数据库查询成功
  function succ(result){
    console.log(collection, result)

    resData =  {
      status : "success"
    }
    res.json(resData)
  }


  db.remove(dbPth, schemaOptions.hotel, collection, delConditions, error ,succ)
}

let hotelSetting = function (req,res){
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if(req.method === 'GET'){
    getHotelInfo(req.query,res)
  }else if (req.method === 'POST'){
    postHotelInfo(req.body,res)
  }else if(req.method === 'DELETE'){
    deleteHotelInfo(req.query,res)
  }
  
}

module.exports = hotelSetting;