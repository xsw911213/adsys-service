let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let services = require('./service')

let path = require('path')
let fePath = path.join(__dirname,"./public/fe");
let adminPath = path.join(__dirname,"./public/admin");

// 静态html文件入口地址
app.use('/', express.static(fePath));
app.use('/admin', express.static(adminPath));

app.use(bodyParser.json({limit: '1mb'}));  //这里指定参数使用 json 格式
app.use(bodyParser.urlencoded({
  extended: true
}));

// 加载服务
for(let i = 0 ; i < services.length ; i++){
  app.all(services[i].path, services[i].fun);
}

app.listen(3008);