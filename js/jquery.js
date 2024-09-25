$(function(){
  function my(){
    $("header").css({backgroundColor:"#fff"});
    $("header .nav>li").find(">a").css({color:"#222"});
    $("header .right li:nth-child(1) a img").attr("src","images/menu_icon_search_color.svg");
    $("header .right li:nth-child(2) a img").attr("src","images/menu_icon_en_color.svg");
    $("header .logo img").attr("src","images/menu_logo_color.svg");
  }
  function my2(){
    $("header").css({backgroundColor:"rgba(0, 0, 0, .2)"});
    $("header .nav>li").find(">a").css({color:"#fff"});
    $("header .right li:nth-child(1) a img").attr("src","images/menu_icon_search_w.svg");
    $("header .right li:nth-child(2) a img").attr("src","images/menu_icon_en_w.svg");
    $("header .logo img").attr("src","images/menu_logo_white.svg");
  }

  $("header .nav>li").hover(function(){
    my();
    $("header .head_bg").css({height:"290px"});
    $(this).find(">a").css({color:"#002569"});

  },function(){
    my2();
    $("header .head_bg").css({height:"0"});
  });

  $("header .right").hover(function(){
    my();
  },function(){
    my2();
  });

  $("header .logo").hover(function(){
    my();
  },function(){
    my2();
  });
});