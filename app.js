let express = require('express');
let app = express();
let router = require('./service');

let path = require('path')
let fePath = path.join(__dirname,"./public/fe");
let adminPath = path.join(__dirname,"./public/admin");

// console.log(router)
// 服务地址
for(let i = 0 ; i < router.length ; i++){
  app.use(router[i].path, router[i].route);
}

// 静态html文件入口地址
app.use('/', express.static(fePath));
app.use('/admin', express.static(adminPath));

app.listen(3008);