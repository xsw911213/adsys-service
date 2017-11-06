// 引入定义变量

function gerUserInfo(user){
  if(user.username === 'master' && user.password === '123456'){
    return {
      status : "success",
      path : "/main",
      userinfo : {
        avatar:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",
        id : '01',
        name : "张宏宇",
        username : "admin",
        role : 'master'
      }
    }
  } else {
    return {
      status : "fail"
    }
  }
}

let loginService = function (req,res){
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.body)
  let resData = gerUserInfo(req.body)
  if(resData.status === 'success'){
    res.json(resData)
  } else {
    let errorObj = {
      status : 400,
      message: "用户名或密码错误"
    }
    res.status(errorObj.status).json(errorObj)
  }
  
}
module.exports = loginService;