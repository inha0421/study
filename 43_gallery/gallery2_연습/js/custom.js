$(document).ready(function(){


    $(".panel >li ul li").click(function(){

        var img = $(this).children("img").attr("src");

        //alert(img);

        $(".gall > img").attr("src",img);
        // gall 의 직계 <img>태그의 src를 변수 img로 변경

        // attr("src") : 속성값만 가져오는 것
        // attr("src","바꿔줄내용") : 속성값을 교체
        // attr ("src",변수이름) : 속성값을 교체

    });


    $(".prev").click(function(){

        $(".prev , .next").hide();

        $(".panel").animate({"margin-left":"-200%"},500,function(){
            $(".panel > li").first().appendTo(".panel");
            //panel 의 첫 번째 li를 append함
            $(".panel").css({"margin-left":"-100%"});

            $(".prev, .next").show();

        });

    });


    $(".next").click(function(){

        $(".prev , .next").hide();

        $(".panel").animate({"margin-left":"0%"},500,function(){
            $(".panel > li").last().prependTo(".panel");
            //panel 의 첫 번째 li를 append함
            $(".panel").css({"margin-left":"-100%"});

            $(".prev, .next").show();

        });

    });




});

