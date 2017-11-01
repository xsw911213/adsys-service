// 引入定义变量

let routerVar = require('../routerVar');

routerVar.router.all('/', function(req, res) {
  let retrunStrObj = {
    url:req.url,
    method: req.method,
    params: req.params,
    query: req.query
  }
  if(retrunStrObj.method === 'POST'){
    // console.log(retrunStrObj)
    res.send('登录成功')
  }else{
    res.json(retrunStrObj)
  }
  
});

module.exports = routerVar.router;