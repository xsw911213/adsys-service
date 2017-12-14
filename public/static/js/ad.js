
// http://47.93.242.6:3008/api/getad

$(document).ready(function(){

  // document.write(123)
  
  $('body').append('<div id="ad-fixed-bg"><a id="close-begin-ad"></a><a id="ad-img-a"><img id="ad-img" src="" alt=""></a></div>'
  +'<style>'
  +'#ad-fixed-bg{position: fixed;width: 100%;height: 100%;top: 0;left: 0;background-color: rgba(0,0,0,.8);}'
  +'#ad-img-a{display: block;position: absolute;width: 240px;height: 360px;top: 0;bottom: 50px;left: 0;right: 0;margin: auto;background-color: #fff;}'
  +'#ad-img{width: 100%;height: 100%;}'
  +'#close-begin-ad{display: block;position: absolute;width: 100%;height: 100%;top: 0;left: 0;}'
  +'</style>')

  $.ajax({
    url:'http://47.93.242.6:3008/api/getad',
    data:{},
    type:'GET',
    success:function(res){
      console.log(res)
      if(res.status === 'success'){
        var data = res.data;
        if(data.beginAd.length > 0){
          // 有开屏广告
          var beginAd = data.beginAd[0]
          $('#ad-img').attr('src',beginAd.adimg)
          $('#ad-img-a').attr('href',beginAd.link)
        }
      }
    }
  })

  $('#close-begin-ad').bind('click',function(){
    $('#ad-fixed-bg').hide();
  })

})


