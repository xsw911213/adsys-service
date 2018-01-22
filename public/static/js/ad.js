
// http://47.93.242.6:3008/api/getad

// $("#menu-tabs-container").css("display","none");
// $(".shopheader-notice").css("display","none");
// $("#header").css({'height':"80px"});
// $("#header").html("即将上线的广告位");
// $(".shop").css({'height':"56px","top":"80px"})
// $(".shopheader-main").css({'top':"82px"})

//http://oz4rno8dv.bkt.clouddn.com/5239ca09d79de598e0062eb5a21d36110fed2a6f.png
//http://oz4rno8dv.bkt.clouddn.com/e2ebb1a752059dfdf2bb6ba321cf92c90a39472a.png

$(document).ready(function(){

  $('#asidewrap').css({'top':"136px"});
  $('#mainwrap').css('margin-top',"127px");

  function insertad(){
    // 开屏广告
    $('body').append('<div id="ad-fixed-bg"><a id="close-begin-ad"></a><p id="promot">点击空白处即可关闭...（<span id="second">5</span>秒后自动关闭）</p></p><a id="ad-img-a" href=""><img id="ad-begin-img" src="" alt=""></a></div>'
    +'<style>'
    +'#promot{position: absolute;right:0;color:#fff;font-size:12px;}'
    +'#ad-fixed-bg{position: fixed;width: 100%;height: 100%;top: 0;left: 0;background-color: rgba(0,0,0,.8);z-index:9999;}'
    +'#ad-img-a{display: block;position: absolute;width: 240px;height: 360px;top: 0;bottom: 50px;left: 0;right: 0;margin: auto;background-color: #fff;}'
    +'#ad-begin-img{width: 100%;height: 100%;}'
    +'#close-begin-ad{display: block;position: absolute;width: 100%;height: 100%;top: 0;left: 0;}'
    +'</style>')

    var adHeight = $(window).width() * 80 / 414;

    $("#header").html('<div class="swiper-container" style="width: 100%;height: '+adHeight+'px;">'
	      +'<div id="ad-banner" class="swiper-wrapper">'
		// +'<div class="swiper-slide"><a href=""><img src="" style="width:100%;height:100%;"/></a></div>'
		// +'<div class="swiper-slide"><a href=""><img src="" style="width:100%;height:100%;"/></a></div>'
	      +'</div>'
	    +'</div>')
  }

  var defaultTopAd = {
    adimg : [
      "http://oz4rno8dv.bkt.clouddn.com/5239ca09d79de598e0062eb5a21d36110fed2a6f.png",
      "http://oz4rno8dv.bkt.clouddn.com/e2ebb1a752059dfdf2bb6ba321cf92c90a39472a.png"
    ],
    link : ["#","#"]
  }

  $.ajax({
    url:'http://adsys.xushaoweisite.com/api/getad',
    data:{},
    type:'GET',
    success:function(res){
      console.log(res)
      if(res.status === 'success'){
        insertad();
        var data = res.data;

        // 开屏广告
        if(data.beginAd.length > 0){
          // 如果有开屏广告
          var beginAd = data.beginAd[0]
          
          $('#ad-begin-img').attr('src',beginAd.adimg)
          $('#ad-img-a').attr('href',beginAd.link)
        }else if(data.beginAd.length === 0){
          // 如果没有开屏广告,添加默认广告
          $('#ad-begin-img').attr('src','http://oz4rno8dv.bkt.clouddn.com/e459954134a6feeca39788f78be13506ecda7227.png')
          $('#ad-img-a').attr('href','#')
        }

        // 上滚动条广告
        var topAdHtml = "";
        if(data.topAd.length > 0){
          var topAd = data.topAd[0];
          // 如果有上滚动条广告
          for(var i = 0; i < topAd.adimg.length;i++){
            if(topAd.adimg[i]){
              topAdHtml += '<div class="swiper-slide"><a href="'+topAd.link[i]+'"><img src="'+topAd.adimg[i]+'" style="width:100%;height:100%;"/></a></div>'
            }else{
              topAdHtml += '<div class="swiper-slide"><a href="'+defaultTopAd.link[i-1]+'"><img src="'+defaultTopAd.adimg[i-1]+'" style="width:100%;height:100%;"/></a></div>'
            }
          }
        }else if(data.topAd.length === 0){
          // 如果没有上滚动条广告,添加默认广告
          topAdHtml = '<div class="swiper-slide"><a href="#"><img src="http://oz4rno8dv.bkt.clouddn.com/5239ca09d79de598e0062eb5a21d36110fed2a6f.png" style="width:100%;height:100%;"/></a></div>'
                     +'<div class="swiper-slide"><a href="#"><img src="http://oz4rno8dv.bkt.clouddn.com/e2ebb1a752059dfdf2bb6ba321cf92c90a39472a.png" style="width:100%;height:100%;"/></a></div>'
        }

        $("#ad-banner").html(topAdHtml);




        var mySwiper = new Swiper('.swiper-container', {
          loop : true,
          autoplay: {
            delay: 5000,//5秒切换一次
          }
        })
      }
    }
  })

  $('#close-begin-ad').live('click',function(){
    $('#ad-fixed-bg').hide();
    clearInterval(djs);
  })
  var time = 5;
  var djs = setInterval(function(){
    time = time - 1;
    $('#second').text(time);
    if(time === 0){
      $('#ad-fixed-bg').hide();
      clearInterval(djs);
    }
  },1000)

})


