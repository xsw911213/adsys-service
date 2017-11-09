// 服务入口文件

let loginService = require('./api/login');
let menuService = require('./api/menu');
let personalSetting = require('./api/personalSetting');
let uploadimg = require('./api/uploadimg');

let services = [
  {
    path: '/login',
    fun: loginService
  },
  {
    path: '/menu',
    fun: menuService
  },
  {
    path: '/personalsetting',
    fun: personalSetting
  },
  {
    path: '/uploadimg',
    fun: uploadimg
  }

]


module.exports = services;