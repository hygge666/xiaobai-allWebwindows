$(function(){
    var tools=[
        {name:'此电脑',url:'http://hy123.ysepan.com/',icon:'./img/imageres_2.ico'},
        {name:'浏览器',url:'https://itab.hylove.top/',icon:'./img/k.webp'},
        {name:'小白top主页①',url:'https://one.hylove.top/',icon:'./img/a.webp'},
        {name:'小白时钟主页②',url:'https://xiaobai.hylove.top/',icon:'./img/firsthometop.png'},
        {name:'小白星空主页③',url:'https://all.hylove.top/',icon:'./img/c.webp'},
        {name:'小白樱花引导页④',url:'https://lead.hylove.top/',icon:'./img/d.webp'},
        {name:'旗下官网',url:'https://xb.hylove.top/',icon:'./img/website-allpage.jpg'},
        {name:'路遥空间',url:'https://ly1.hylove.top/',icon:'./img/luyaohome.jpg'},
        {name:'早报-快讯',url:'https://www.woshipm.com/news',icon:'./img/zaobao.jpg'},
        {name:'每天60秒读懂世界',url:'http://tpoto.top/hot/',icon:'./img/everyday60s.jpg'},
        {name:'安全检测',url:'https://detail.aiuys.com/',icon:'./img/iphone-search.jpg'},
        {name:'工具箱',url:'https://tool.browser.qq.com/',icon:'./img/qbtool-latest.png'},
        {name:'站点监控',url:'http://status.hylove.top/',icon:'./img/status.png'},
        {name:'壁纸图片',url:'https://edmeitu.com/index.html',icon:'./img/j.webp'},
        {name:'随机视频1',url:'https://97by.cn/sj/',icon:'./img/1girl.jpg'},
        {name:'随机视频2',url:'https://mm.hylove.top/',icon:'./img/2girl.jpg'},
        {name:'游戏',url:'https://xingye.me/game/index.php',icon:'./img/g.webp'},
        {name:'小霸王',url:'https://www.yikm.net/#google_vignette',icon:'./img/yikmxbw.jpg'},
        {name:'影视1',url:'https://www.bei5dy.com/',icon:'./img/h.webp'},
        {name:'影视2',url:'https://www.yjys.me/',icon:'./img/yuanjueyingshi.png'},
        {name:'影视3',url:'https://www.foxiys.cc/',icon:'./img/fxys.jpg'},
        {name:'直播1',url:'./tool/ds',icon:'./img/l.webp'},
        {name:'直播2',url:'http://www.tvyan.com/',icon:'./img/dianshitv.jpg'},
        {name:'MyfreeMP3平台',url:'https://tools.liumingye.cn/music/?page=searchPage#/recent',icon:'./img/music.jpg'},
        {name:'小白音乐播放器',url:'https://music.huangyong.link/',icon:'./img/music1.jpg'},
        {name:'mmplayer在线音乐播放器',url:'https://netease-music.fe-mm.com/#/music/playlist',icon:'./img/music3.jpg'},
        {name:'轻音乐俱乐部club',url:'https://qingyinyue.club/',icon:'./img/qingyinyueclub.png'},
        {name:'音乐解析1',url:'https://www.fangpi.net/',icon:'./img/music5.jpg'},
        {name:'音乐解析2',url:'https://music.wujiyan.cc/',icon:'./img/music2.jpg'},
        {name:'音乐解析3',url:'https://www.musicenc.com/',icon:'./img/music4.jpg'},
        {name:'哔哩哔哩bilibili',url:'http://bilibili.com/',icon:'./img/bilibili.png'},
        {name:'小白の起始页',url:'http://xydh.fun/hy123',icon:'./img/hy123.jpg'},
        {name:'路遥知马力-软件之家',url:'http://lovehy.ysepan.com/',icon:'./img/rjyspan.png'},
        {name:'小白^卟白的资源库',url:'http://hy123.ysepan.com/',icon:'./img/imageres_5.ico'},
        {name:'小白·学习blog博客',url:'http://hylove.top',icon:'./img/luyaotx.png'},
        {name:'小白-Home简记与叙',url:'http://a.hylove.top',icon:'./img/xiaobaihometop.png'},
        {name:'励心缘起の主页',url:'http://home.lxyq.link/',icon:'./img/xiaobaitimehome.png'},
        {name:'小白のHome',url:'http://newpage.hylove.top',icon:'./img/newpage.png'},
        {name:'AI🤖引导页',url:'http://aigc.lxyq.link/',icon:'./img/aigcpage.png'},
        {name:'Xiaobaiの个人主页',url:'http://newhome.hylove.top',icon:'./img/bzstudy.png'},
        {name:'路遥·空间首页',url:'http://go.lxyq.link/',icon:'./img/luyaohonepage.png'},
        {name:'3D-元素周期表',url:'http://3dys.hylove.top',icon:'./img/3dys.jpg'},
        
        

    ]
    for(var i in tools){
        var tool=tools[i]
        var item="<li class='pc-icon desktoptools' data='"+JSON.stringify(tool)+"'>"+
        '<img class="mypc" src="'+tool.icon+'" />'+
        '<div>'+tool.name+'</div>'+
        '</li>';
        $('.desktop-list').append(item)
    }

   
    $('.desktoptools').click(function(){
        var data =JSON.parse($(this).attr('data'))
       // $('.right-top img').eq(0).click()
        layer.open({
            type: 2,
            title: data.name,
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['88%', '95%'],
            content: data.url
          });
    })



})
