// 引入定义变量

let routerVar = require('../routerVar');

routerVar.router.post('/', function(req, res) {
  console.log(req);

  res.send('登录成功')
});

module.exports = routerVar.router;