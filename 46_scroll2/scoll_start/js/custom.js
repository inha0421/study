$(document).ready(function(){


    var hei = $(window).height();
    $(".boxWrap > div").height(hei); //처음에 화면 사이즈에맞게 높이적용

    //높이를 900으로 저장했던 div 태그들을 시작하자마자
    //웹브라우저의 높이로 강제로 셋팅


    //window : 웹브라우저 툴바까지 포함한 document보다 상위범위
    $(window).resize(function(){

    var hei = $(window).height();
    $(".boxWrap > div").height(hei); //화면 사이즈에맞게 높이변화

    //웹브라우저 화면창을 사이즈를 늘리거나 줄일때 마다
    //웹브라우저의 높이로 div 태그들의 높이를 계속 바꿔주도록 셋팅


    });

    $(".menu li").click(function(){

        $(".menu li").removeClass("on");
        $(this).addClass("on");


        hei = $(window).height();
        var i = $(this).index();

        $("body").animate({"scrollTop": i*hei});
        //body 태그의 스크롤바 위치가 div 태그와 순서값을 곱한 위치로 이동
        //예 : 0*600 1*600 3*600

    });

    $(window).scroll(function(){

        hei = $(window).height();
        var sc = $(window).scrollTop();

        //스크롤했을때 li에 클래스붙이기


        if(sc >= hei*0 && sc <hei * 1){
            $(".menu li").removeClass("on");
            $(".menu li").eq(0).addClass("on");
        }

        else if(sc >= hei*1 && sc <hei * 2){
            $(".menu li").removeClass("on");
            $(".menu li").eq(1).addClass("on");
        }

        else if(sc >= hei*2 && sc <hei * 3){
            $(".menu li").removeClass("on");
            $(".menu li").eq(2).addClass("on");
        }

        else if(sc >= hei*3){
            $(".menu li").removeClass("on");
            $(".menu li").eq(3).addClass("on");
        }



    });

});



