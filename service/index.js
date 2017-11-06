// 服务入口文件

let loginService = require('./api/login');
let menuService = require('./api/menu');

let services = [
  {
    path: '/login',
    fun: loginService
  },
  {
    path: '/menu',
    fun: menuService
  }
]


module.exports = services;