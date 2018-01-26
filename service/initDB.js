let db = require('./db/index')
let schemaOptions = require('./db/schemaOptions')
let dbPth = require('../config').dbPth;

// let mongoose = require('mongoose');
// console.log(mongoose.model)

// mongoose.model.remove('users',function(err){
//   console.log(err)
// });
// mongoose.model.remove('menus',function(err){
//   console.log(err)
// });

let initUsers = function () {

  let collection = 'users'

  let users = [
    {
      "username": "master",
      "password": "zhang123456",
      "role": "master",
      "name": "大宇哥",
      "userid": 1,
      "avatar": "https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png"
    },
    {
      "username": "admin",
      "password": "123456",
      "role": "admin",
      "name": "管理员",
      "userid": 2,
      "avatar": "https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png"
    }
  ]
  db.insert(dbPth, schemaOptions.user, collection, users);
}
initUsers();

let initMenu = function () {

  let collection = 'menus'

  let menu = [
    {
      "role": "master",
      "menu": [
        {
          "path": "/",
          "leaf": true,
          "name": "",
          "children": [
            {
              "path": "/main",
              "name": "主页"
            }
          ]
        },
        {
          "path": "/",
          "name": "管理设置",
          "children": [
            {
              "path": "/hotelSetting",
              "name": "酒店设置"
            },
            {
              "path": "/accountSetting",
              "name": "账号设置"
            }
          ]
        },
        {
          "path": "/",
          "name": "广告投放",
          "children": [
            {
              "path": "/beginAd",
              "name": "开屏广告"
            },
            {
              "path": "/topAd",
              "name": "上滚动条"
            },
            {
              "path": "/bottomAd",
              "name": "下固定广告位"
            }
          ]
        }
      ]
    },
    {
      "role": "admin",
      "menu": [
        {
          "path": "/",
          "leaf": true,
          "name": "",
          "children": [
            {
              "path": "/mainAd",
              "name": "主页"
            }
          ]
        },
        {
          "path": "/ad",
          "name": "广告投放",
          "children": [
            {
              "path": "/beginAd",
              "name": "开屏广告"
            },
            {
              "path": "/topAd",
              "name": "上滚动条"
            },
            {
              "path": "/bottomAd",
              "name": "下固定广告位"
            }
          ]
        }
      ]
    }
  ]

  db.insert(dbPth, schemaOptions.menu, collection, menu);

}

initMenu();
