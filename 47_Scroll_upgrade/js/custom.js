$(document).ready(function(){


    // 탭메뉴 구현

    $(".tab_menu li").click(function(){

        var i = $(this).index();

        $(".tab_menu li").removeClass("on");
        $(this).addClass("on");

        $(".tab_box >div").hide();
        $(".tab_box >div").eq(i).show();

    });

    // 아코디언 메뉴 구현


    $(".acodi > li span").click(function(){

        var toggle = $(this).hasClass("on");

        if(toggle){

            $(this).siblings("ul").slideUp();
            $(this).removeClass("on");
        }

        else{
            $(".acodi >li span").removeClass("on");
            $(".acodi >li span").siblings("ul").slideUp();
            $(this).siblings("ul").slideDown();
            $(this).addClass("on");

        }


    });

    // 슬라이더

    var i = $(".btn .on").index();
    var len = $(".btn li").length;
    var wid = $(".slider").width();


    //버튼 클릭하면 클래스 주기
    $(".btn li").click(function(){

        $(".btn li").removeClass("on");
        $(this).addClass("on");

    });

    //prev
    $(".prev").click(function(){

        if(i == 0){
            i = len-1;
        }

        else{
            i = i-1;
        }

        Sliding();

    });

    //next
    $(".next").click(function(){

        if(i == len-1){
            i = 0;
        }

        else{
            i = i+1;
        }

        Sliding();

    });

    //버튼 누르면 해당 화면으로 이동

    $(".btn li").click(function(){

        i = $(this).index();

        Sliding();

    });


    //슬라이드 함수 구현

    function Sliding(){

        $(".panel").animate({"margin-left":-wid *i});
        $(".btn li").removeClass("on");
        $(".btn li").eq(i).addClass("on");


    }

    //auto 슬라이딩

    var auto = setInterval(function(){

        if(i == len-1){
            i = 0;
        }

        else{
            i = i+1;
        }

        Sliding();


    },1500);

    //마우스엔터시 정지

    $(".slider").mouseenter(function(){

        clearInterval(auto);


    });


    //마우스리브시 다시 재생

    $(".slider").mouseleave(function(){

        if(i == len-1){
            i = 0;
        }

        else{
            i = i+1;
        }

        Sliding();

    },1500);


    // 갤러리

    $(".list li").click(function(e){

        e.preventDefault();

        var imgSrc = $(this).children("a").attr("href");

        $(".view").css({"background-image":"url("+imgSrc+")"});

        $(".list li").removeClass("on");
        $(this).addClass("on");


    });

    //퀵메뉴

    var s1 = $(".s_tab").offset().top;
    var s2 = $(".s_aco").offset().top;
    var s3 = $(".s_slide").offset().top;
    var s4 = $(".s_gallery").offset().top;

    //var q = $(".quick").offset().top;

    var sc = $(document).scrollTop();

    $(document).scroll(function(){

        sc = $(this).scrollTop();


        if(sc >= s1 && sc < s2){

            $(".q_btn li").removeClass("on");
            $(".q_btn li").eq(0).addClass("on");

        }
        else if(sc >= s2 && sc < s3){

            $(".q_btn li").removeClass("on");
            $(".q_btn li").eq(1).addClass("on");

        }
        else if(sc >= s3 && sc < s4){

            $(".q_btn li").removeClass("on");
            $(".q_btn li").eq(2).addClass("on");

        }
        else if(sc >= s4){

            $(".q_btn li").removeClass("on");
            $(".q_btn li").eq(3).addClass("on");

        }


    });

    //버튼 클릭했을때 해당 화면으로 부드럽게 이동

    $(".q_btn li").click(function(e){

        e.preventDefault();

        var href = $(this).children("a").attr("href");

        var move = $(href).offset().top;

        $("body").animate({"scrollTop":move});


    });



});
