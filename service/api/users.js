// 引入定义变量

let routerVar = require('../routerVar');

routerVar.router.all('/', function(req, res) {
  let retrunStrObj = {
    url:req.url,
    method: req.method,
    params: req.params,
    query: req.query
  }

  res.json(retrunStrObj)
  
});

module.exports = routerVar.router;