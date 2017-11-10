// 主账户设置管理员账户服务
// 包含GET、POST、DELETE三种方法


let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function getAdminInfo(userinfoRromClient, res) {

  let collection = 'users';

  let condidtion = { role: { $ne: userinfoRromClient.role } }

  let fields = {
    _id: false,
    username: true,
    password: true,
    role: true,
    name: true,
    userid: true,
    avatar: true
  }

  let resData = {}

  function error(err) {
    console.log(err)
  }
  // 数据库查询成功
  function succ(result) {
    console.log(result)

    let userinfoRromDB = result[0];

    let userList = [];
    // console.log("aaaaa",Array.isArray(userinfoRromDB))
    result.forEach(function (item, index) {
      let obj = {
        username: item.username,
        name: item.name,
        userid: item.userid,
      }
      userList.push(obj);
    });
    console.log('userList', userList)

    resData = {
      status: "success",
      // data: {
      //   userList,
      //   username: userinfoRromDB.username,
      //   password: userinfoRromDB.password,
      //   name: userinfoRromDB.name,
      //   avatar: userinfoRromDB.avatar,
      //   userid: userinfoRromDB.userid
      // }
      data: result
    }

    res.json(resData)

  }

  db.find(dbPth, schemaOptions.user, collection, condidtion, fields, null, error, succ);

}

function putAdminInfo(userinfoRromClient, res) {
  let collection = 'users';

  let oldValue = { userid: userinfoRromClient.userid };

  let newValue = {
    username: userinfoRromClient.username,
    password: userinfoRromClient.password,
    name: userinfoRromClient.name,
    avatar: userinfoRromClient.avatar
  }
  let resData = {};

  function error(err) {
    console.log(err)
  }
  // 数据库查询成功
  function succ(result) {
    console.log(result)

    resData = {
      status: "success"
    }

    res.json(resData)
  }

  db.update(dbPth, schemaOptions.user, collection, oldValue, newValue, error, succ);
}


let accountSetting = function (req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if (req.method === 'GET') {
    getAdminInfo(req.query, res)
  } else if (req.method === 'PUT') {
    putAdminInfo(req.body, res)
  }

}

module.exports = accountSetting;