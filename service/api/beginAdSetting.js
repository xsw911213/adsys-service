// 引入定义变量
let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

require('./components/date')

let requestData = {};

function getBeginAdInfo(userinfoRromClient, res) {
  let collection = 'beginads';
  let now = new Date().getYMD();
  
  let condidtion = {date:{$gte: now}};

  // name: {type: String},
  // contact: {type: String},
  // phone: {type: String},
  // time : { type:Date, default: Date.now }
  let fields = {
    _id: true,
    date: true,
    time: true,
    adimg: true,
    link: true
  }

  let resData = {}

  function error(err) {
    console.log(collection, err)
  }
  // 数据库查询成功
  function succ(result) {
    console.log(collection, result)

    // let userinfoRromDB = result[0];

    resData = {
      status: "success",
      data: result,
      date: new Date()
    }

    res.json(resData)

  }

  db.find(dbPth, schemaOptions.beginAd, collection, condidtion, fields, null, error, succ);
  // db.find(dbPth, schemaOptions.beginAd, collection, condidtion, fields, {sort:{date:-1}}, error, succ);
}

function setBeginAdInfo(userinfoRromClient, res) {
  let collection = 'beginads';

  let data = userinfoRromClient;

  function error(err){
    console.log(collection, err)
  }
  // 数据库插入成功
  function succ(result){
    console.log(collection, result)

    resData =  {
      status : "success"
    }
    res.json(resData)
  }

  db.insert(dbPth, schemaOptions.beginAd, collection, data, error, succ);
}

function deleteBeginAdById(userinfoRromClient, res){
  let collection = 'beginads';
  console.log(userinfoRromClient)

  let delConditions = userinfoRromClient

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


  db.remove(dbPth, schemaOptions.beginAd, collection, delConditions, error ,succ)
}

let beginAdSetting = function (req, res) {
  requestData = req;
  // console.log(req.url)
  // console.log(req.method)
  // console.log(req.params)
  // console.log(req.query)
  // console.log(req.body)
  if (req.method === 'GET') {
    getBeginAdInfo(req.query, res)
  } else if (req.method === 'POST') {
    setBeginAdInfo(req.body, res)
  } else if(req.method === 'DELETE'){
    deleteBeginAdById(req.query, res)
  }
}

module.exports = beginAdSetting;