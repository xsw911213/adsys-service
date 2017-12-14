// 引入定义变量
let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");


function getAds(queryFromClent,res){
  let now = new Date();
  let date = now.getYMD();
  let time = now.getTimeQuantum();

  const condition = {
    date,
    time
  }

  let collection = 'beginads';

  // 除了_id以外要么全是0，要么全是1。如果不需要某些字段，则不为其设置
  const fields = {
    _id: false,
    // date: false,
    // time: false,
    adimg: true,
    link: true
  }

  let resData = {}

  function error(err) {
    console.log(collection, err)
  }
  // 数据库查询成功
  function succ(result) {

    let collection = 'topads';
    console.log(collection, result)

    // let userinfoRromDB = result[0];
    const beginAd = result;

    // res.json(beginAd)

    // 数据库查询成功
    function succ1(result) {
      console.log(collection, result)
  
      const topAd = result
  
      resData = {
        status: "success",
        data:{
          beginAd,
          topAd
        }
      }
  
      res.json(resData)
  
    }
  
    db.find(dbPth, schemaOptions.topAd, collection, condition, fields, null, error, succ1);

  }

  db.find(dbPth, schemaOptions.beginAd, collection, condition, fields, null, error, succ);
}

let adsService = function (req, res) {
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)

  getAds(req.query,res);
}
module.exports = adsService;