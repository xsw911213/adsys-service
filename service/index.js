// 服务入口文件

let loginService = require('./api/login');

let services = [
  {
    path: '/login',
    fun: loginService
  }
]


module.exports = services;