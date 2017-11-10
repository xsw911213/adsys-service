// 引入定义变量
let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");


function getMentFun(queryFromClent,res){
  let collection = 'menus';
  
  let condidtion = { role: queryFromClent.role };
  // condidtion = {};
  
  let fields = {
    _id: false,
    role: true,
    menu: true
  }

  function error(err){
    console.log(err)
  }
  // 数据库查询成功
  function succ(result){
    console.log(result)

    res.json(result[0].menu)
  }
  
  db.find(dbPth, schemaOptions.menu, collection, condidtion, fields, null, error, succ);
}

let menuService = function (req, res) {
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)

  getMentFun(req.query,res);
  // let menu = [];
  // if (req.query.userid === '01') {
  //   menu = [
  //     {
  //       path: '/',
  //       leaf: true,//只有一个节点
  //       name: '',
  //       children: [
  //         {
  //           path: '/main',
  //           name: '主页'
  //         }
  //       ]
  //     },
  //     {
  //       path: '/',
  //       name: '管理设置',
  //       children: [
  //         {
  //           path: '/hotelSetting',
  //           name: '酒店设置'
  //         },
  //         {
  //           path: '/accountSetting',
  //           name: '账号设置'
  //         }
  //       ]
  //     },
  //     {
  //       path: '/ad',
  //       name: '广告投放',
  //       children: [
  //         {
  //           path: '/begin',
  //           name: '开屏广告'
  //         },
  //         {
  //           path: '/top',
  //           name: '上滚动条'
  //         },
  //         {
  //           path: '/bottom',
  //           name: '下固定广告位'
  //         }
  //       ]
  //     },

  //   ]
  // } else if(req.query.userid === '02'){
  //   menu = [
  //     {
  //       path: '/',
  //       leaf: true,//只有一个节点
  //       name: '',
  //       children: [
  //         {
  //           path: '/main',
  //           name: '主页'
  //         }
  //       ]
  //     },
  //     {
  //       path: '/',
  //       name: '广告投放',
  //       children: [
  //         {
  //           path: '/page4',
  //           name: '页面4'
  //         },
  //         {
  //           path: '/page5',
  //           name: '页面5'
  //         }
  //       ]
  //     },
  //   ]
  // }

  // res.json(menu)
  
  // res.status(501).json({
  //   message:'Something broke!'
  // });
}
module.exports = menuService;