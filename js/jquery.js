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


  $(".s5 .right li").each(function(){
    $(this).find(".lang span").eq(0).css({color:"#99FFAC"});

    $(".lang span").click(function(){
      $(".lang span").css({color:"#fff"});
      $(this).css({color:"#99FFAC"});
    });
  });

 

  $(".s5 .download > span").hover(function(){
    $(this).find("img").attr("src","images/s5 arrow_color.svg");
  },function(){
    $(this).find("img").attr("src","images/s5 arrow_w.svg");
  });





/*   document.querySelector(".s5").onscroll = function(){
    let srcTop = document.documentElement.scrollTop;
    console.log(srcTop);
    if(srcTop>=0 && srcTop<500){
      this.className="Bg1";
    }else{
      this.className="Bg2";
    };
  }; */
  
  $(window).scroll(function(){
    var
    h = $(document).scrollTop();
    offset = $(".s5 .right li:nth-child(1)").offset().top;
    offset2 = $(".s5 .right li:nth-child(2)").offset().top;
    offset3 = $(".s5 .right li:nth-child(3)").offset().top;
    offset4 = $(".s5 .right li:nth-child(4)").offset().top;
    offset5 = $(".s5 .right li:nth-child(5)").offset().top;
    
    if(h > offset && h < offset2) { //특정 div가 있는 곳을 지날 때
       $(".s5").addClass("Bg1");
    } else if(h > offset2 && h < offset3) {
      $(".s5").addClass("Bg2");
    } else if(h > offset3 && h < offset4) {
      $(".s5").addClass("Bg3");
    }  else if(h > offset4 && h < offset5) {
      $(".s5").addClass("Bg4");
    } else if(h > offset5) {
      $(".s5").addClass("Bg5");
    } 
    else {
      $(".s5").addClass("Bg1");
    }
  });
}); 