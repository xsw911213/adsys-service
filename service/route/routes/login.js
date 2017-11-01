// 引入定义变量

let routerVar = require('../routerVar');

routerVar.router.all('/', function(req, res) {
  console.log(req);

  if(req.method === 'POST'){
    // console.log(retrunStrObj)
    // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.send('登录成功')
  }else{
    
  }
  
});

module.exports = routerVar.router;