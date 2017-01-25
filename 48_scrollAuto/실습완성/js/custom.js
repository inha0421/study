$(document).ready(function(){

    /*첫번째 구역 슬라이드*/

    var i = $(".btn li.on").index();
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

    /*첫번째 구역 슬라이드 끝*/

    /*두번째 구역 탭 시작*/

    $(".tabbox > ul li").click(function(){
        var j = $(this).index();
        $(".tabbox > ul li").removeClass("on");
        $(this).addClass("on");
        $(".tab > ul").hide();
        $(".tab > ul").eq(j).show();
    });

    /*두번째 구역 탭 끝*/

    /*세번째 구역 애니메이트 구문 시작*/


    //재생버튼 클릭 시
            $(".play").click(function(){

                $(this).hide();

                $(".top").animate({"width":"100%"},function(){


                        $(".right").animate({"height":"100%"},function(){


                            $(".bottom").animate({"width":"100%"},function(){


                                $(".left").animate({"height":"100%"},function(){


                                        $(".movie").fadeIn();

                                });

                            });

                        });

                });

            });


    //close 버튼 눌렀을때
            $(".close").click(function(){

                $(".movie").fadeOut();
                $(".play").show();
                $(".top").animate({"width":"0%"});
                $(".right").animate({"height":"0%"});
                $(".bottom").animate({"width":"0%"});
                $(".left").animate({"height":"0%"});
            });

    /*세번째 구역 애니메이트 구문 끝*/


    /*네번째 구역 슬라이드 갤러리 구문 시작*/

    $(".panel02 > li ul li").click(function(){

        var img = $(this).children("img").attr("src");
        $(".gall > img").attr("src",img);

    });

    $(".prev2").click(function(){

        $(".prev2,.next2").hide();

        $(".panel02").animate({"margin-left":"-200%"},500,function(){


            $(".panel02 > li").first().appendTo(".panel02");
            $(".panel02").css({"margin-left":"-100%"});
            $(".prev2,.next2").show();

         });
    });

    $(".next2").click(function(){
        $(".prev2,.next2").hide();
        $(".panel02").animate({"margin-left":"0%"},500,function(){

            $(".panel02 > li").last().prependTo(".panel02");
            $(".panel02").css({"margin-left":"-100%"});
            $(".prev2,.next2").show();
        });

    });
    /*네번째 구역 슬라이드 갤러리 구문 끝*/



    /*상단메뉴 클릭시 스크롤 */

    var box1 = $("#box1").offset().top;
    var box2 = $("#box2").offset().top;
    var box3 = $("#box3").offset().top;
    var box4 = $("#box4").offset().top;

    $("header ul li").click(function(e){

        e.preventDefault();

        var href = $(this).children("a").attr("href");

        var move = $(href).offset().top;

        $("body").animate({"scrollTop":move});
    });
});
