// 服务入口文件

let indexRouter = require('./api/index');
let userRouter = require('./api/users');
let loginRouter = require('./api/users');

let routes = [
  {
    path: '/index',
    route: indexRouter
  },
  {
    path: '/users/:name',
    route: userRouter
  },
  {
    path: '/login',
    route: loginRouter
  },
]


module.exports = routes;