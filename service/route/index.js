// 路由主出口文件

let indexRouter = require('./routes/index');
let userRouter = require('./routes/users');
let loginRouter = require('./routes/users');

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