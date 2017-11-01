// 引入定义变量

let routerVar = require('../routerVar');

routerVar.router.get('/', function(req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  let retrunStrObj = {
    url:req.url,
    method: req.method,
    params: req.params,
    query: req.query
  }
  res.json(retrunStrObj)
  //res.sendfile('../../../public/index.html');
});

module.exports = routerVar.router;
