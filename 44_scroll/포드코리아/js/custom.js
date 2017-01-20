$(document).ready(function(){

    var ex = $(".explore").offset().top;

    $(document).scroll(function(){


        var sc = $(this).scrollTop();
//        var ex = $(".explore").offset().top;
//        $(".box").text(sc);

        if(sc >= ex){

            $(".explore").addClass("fix");
        }

        else if(sc < ex){

            $(".explore").removeClass("fix");

        }

    });


    //슬라이더

    var i = $(".navi .on").index();
    var wid = $(".slider").width();
    var len = $(".navi li").length;


    $(".navi li").click(function(){

        $(".navi li").removeClass("on");
        $(this).addClass("on");

    });

    $(".navi li").click(function(){

        i = $(this).index();

        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");

        $(".panel").animate({"margin-left":-wid *i},500);

    });


    //이미지 마우스오버 처리




});
