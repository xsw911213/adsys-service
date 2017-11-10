let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");


function getUserInfo(userinfoRromClient,res){
  let collection = 'users';

  let condidtion = { userid: userinfoRromClient.userid };
  
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

  function error(err){
    console.log(err)
  }
  // 数据库查询成功
  function succ(result){
    console.log(result)

    let userinfoRromDB = result[0];

    resData =  {
      status : "success",
      data : {
        avatar : userinfoRromDB.avatar,
        name : userinfoRromDB.name,
        username : userinfoRromDB.username,
      }
    }

    res.json(resData)

    // if(userinfoRromDB.password == userinfoRromClient.password){
    //   console.log('验证通过');
      
    // }else{
    //   console.log('验证没通过');
    //     let errorObj = {
    //       status : 400,
    //       message: "用户名或密码错误"
    //     }
    //     res.status(errorObj.status).json(errorObj)
    // }
  }
  
  db.find(dbPth, schemaOptions.user, collection, condidtion, fields, null, error, succ);
}

function setUserInfo(userinfoRromClient,res){
  let collection = 'users';
  
  let oldValue = { userid: userinfoRromClient.userid };

  let newValue = {}
  if(userinfoRromClient.flag === "basicinfo"){
    newValue = {
      username: userinfoRromClient.username,
      name: userinfoRromClient.name,
      avatar: userinfoRromClient.avatar
    }
  }else if(userinfoRromClient.flag === "password"){
    newValue = {
      password: userinfoRromClient.newPassword
    }
  }

  let resData = {};

  function error(err){
    console.log(err)
  }
  // 数据库查询成功
  function succ(result){
    console.log(result)

    resData =  {
      status : "success"
    }

    res.json(resData)
  }
  
  db.update(dbPth, schemaOptions.user, collection, oldValue, newValue, error, succ);
}

let personalSetting = function (req,res){
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if(req.method === 'GET'){
    getUserInfo(req.query,res)
  }else if (req.method === 'PUT'){
    setUserInfo(req.body,res)
  }
  
}
module.exports = personalSetting;