let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let config = require('./config')
console.log(config);

let cors = require('cors')

let services = require('./service')

// path模块
let path = require('path')

let fePath = path.join(__dirname,"./public/fe");
let adminPath = path.join(__dirname,"./public/admin");
let assetPath = path.join(__dirname,"./public/static")



// 允许跨域-exprexx
// app.all('*',function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

//   if (req.method == 'OPTIONS') {
//     res.send(200); /让options请求快速返回/
//   }
//   else {
//     next();
//   }
// });
// 允许跨域-cors模块
app.use(cors());

// 静态html文件入口地址
// app.use('/', function(req,res){
//   console.log(req.url);
// });
app.use('/', express.static(fePath));
app.use('/admin', express.static(adminPath));
app.use('/static', express.static(assetPath));

// 解析请求body的参数
app.use(bodyParser.json());  //这里指定参数使用 json 格式
app.use(bodyParser.urlencoded({
  extended: true
}));


// 加载服务
for(let i = 0 ; i < services.length ; i++){
  app.all("/api"+services[i].path, services[i].fun);
}

app.listen(config.port);