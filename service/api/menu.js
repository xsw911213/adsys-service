
let menuService = function (req, res) {
  // console.log(req)
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  let menu = [];
  if (req.query.userid === '01') {
    menu = [
      {
        path: '/',
        leaf: true,//只有一个节点
        name: '',
        children: [
          {
            path: '/main',
            name: '主页'
          }
        ]
      },
      {
        path: '/',
        name: '管理设置',
        children: [
          {
            path: '/hotelSetting',
            name: '酒店设置'
          },
          {
            path: '/accountSetting',
            name: '账号设置'
          }
        ]
      },
      {
        path: '/ad',
        name: '广告投放',
        children: [
          {
            path: '/begin',
            name: '开屏广告'
          },
          {
            path: '/top',
            name: '上滚动条'
          },
          {
            path: '/bottom',
            name: '下固定广告位'
          }
        ]
      },

    ]
  } else if(req.query.userid === '02'){
    menu = [
      {
        path: '/',
        leaf: true,//只有一个节点
        name: '',
        children: [
          {
            path: '/main',
            name: '主页'
          }
        ]
      },
      {
        path: '/',
        name: '广告投放',
        children: [
          {
            path: '/page4',
            name: '页面4'
          },
          {
            path: '/page5',
            name: '页面5'
          }
        ]
      },
    ]
  }

  res.json(menu)
  
  // res.status(501).json({
  //   message:'Something broke!'
  // });
}
module.exports = menuService;