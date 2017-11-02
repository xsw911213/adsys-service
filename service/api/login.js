// 引入定义变量

let loginService = function (req,res){
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.body)
  let resData = {
    status : "success",
    path : "/main",
    userinfo : {
      avatar:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",
      id : 1,
      name : "张某某",
      username : "admin"
    }
  }
  res.json(resData)
}
module.exports = loginService;