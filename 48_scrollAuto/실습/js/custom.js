$(document).ready(function(){

    //헤더 클래스

    $("header .head li").click(function(){

        $("header .head li").removeClass("on3");
        $(this).addClass("on3");

    });

    $("header .head li").click(function(e){

        e.preventDefault();

        var href = $(this).children("a").attr("href");

        var move = $(href).offset().top;

        $("body").animate({"scrollTop":move});


    });

    //슬라이더

    var i  = $(".btn li.on").index();
    var wid = $(".slider").width();
    var len = $(".btn li").length;

      $(".prev").click(function(){

          if(i==0){
              i = len - 1;
          }
          else {
              i = i -1;
          }

          $(".btn li").removeClass("on");
          $(".btn li").eq(i).addClass("on");

          $(".panel li").fadeOut();
          $(".panel li").eq(i).fadeIn();

      });

    $(".next").click(function(){

        if(i == len-1) {
            i = 0;
        }
        else {
            i = i + 1;
        }

          $(".btn li").removeClass("on");
          $(".btn li").eq(i).addClass("on");
          $(".panel li").fadeOut();
          $(".panel li").eq(i).fadeIn();
    });

    $(".btn li").click(function(){

          i = $(this).index();

          $(".btn li").removeClass("on");
          $(".btn li").eq(i).addClass("on");

          $(".panel li").fadeOut();
          $(".panel li").eq(i).fadeIn();

    });




    // 탭메뉴

    $(".tabMenu li").click(function(){

        var j = $(this).index();

        $(".tabMenu li").removeClass("on2");
        $(this).addClass("on2");

        $(".tabBox > div").removeClass("show");
        $(".tabBox > div").eq(j).addClass("show");


    });

    // 비디오

    $(".switch").click(function(){

    $(this).fadeOut(500);
        $(".top").animate({"width":"100%"},function(){

            $(".right").animate({"height":"100%"},function(){

                $(".bottom").animate({"width":"100%"},function(){

                    $(".left").animate({"height":"100%"},function(){

                        $(".view").fadeIn();

                      });
                  });
              });
      });
    });


    $(".view .stop").click(function(){

        $(".view").fadeOut();
        $(".switch").fadeIn(500);
        $(".top").animate({"width":"0%"});
        $(".right").animate({"height":"0%"});
        $(".bottom").animate({"width":"0%"});
        $(".left").animate({"height":"0%"});

    });


    //갤러리

    $(".g_panel >li ul li").click(function(){

        var img = $(this).children("img").attr("src");

        $(".gall > img").attr("src",img);
        // gall 의 직계 <img>태그의 src를 변수 img로 변경

        // attr("src") : 속성값만 가져오는 것
        // attr("src","바꿔줄내용") : 속성값을 교체
        // attr ("src",변수이름) : 속성값을 교체

    });


    $(".g_prev").click(function(){

        $(".g_prev, .g_next").hide();

        $(".g_panel").animate({"margin-left":"-200%"},500,function(){
            $(".g_panel > li").first().appendTo(".g_panel");
            //panel 의 첫 번째 li를 append함
            $(".g_panel").css({"margin-left":"-100%"});

            $(".g_prev, .g_next").show();

        });

    });


    $(".g_next").click(function(){

        $(".g_prev, .g_next").hide();

        $(".g_panel").animate({"margin-left":"0%"},500,function(){
            $(".g_panel > li").last().prependTo(".g_panel");
            //panel 의 첫 번째 li를 append함
            $(".g_panel").css({"margin-left":"-100%"});

            $(".g_prev, .g_next").show();

        });

    });

    //마우스 휠

    var s1 = $("#s1").offset().top;
    var s2 = $("#s2").offset().top;
    var s3 = $("#s3").offset().top;
    var s4 = $("#s4").offset().top;


    $("section").on("mousewheel",function(event,delta){

		//마우스 휠을 올렸을때
          if (delta > 0) {

            var prev_b = $(this).prev().offset().top;

            $("body").stop().animate({"scrollTop":prev_b});


          }

        //마우스 휠을 내렸을때
        else if (delta < 0) {

            var next_b = $(this).next().offset().top;

            $("body").stop().animate({"scrollTop":next_b});

          }

    });

});
