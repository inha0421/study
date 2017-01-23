$(document).ready(function(){

    var hei = $(window).height();
    $(".boxWrap >div").height(hei);


    $(window).resize(function(){

        var hei = $(window).height();
        var sc = $(".boxWrap >div").height(hei);

    });


    $(".menu li").click(function(){

        hei = $(window).height();
        var i = $(this).index();
//        var j = $(".boxWrap >div").length;

        $(".menu li").removeClass("on");
        $(this).addClass("on");

        $("body").animate({"scrollTop":i*hei});

    });

        $(window).scroll(function(){

        hei = $(window).height();
        var sc = $(window).scrollTop();

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


        if(sc == hei*0){
            $(".logo1").fadeIn(1000);
        }
        else if(sc == hei*1){
            $(".logo2").fadeIn(1000);
        }
        else if(sc == hei*2){
            $(".logo3").fadeIn(1000);
        }
        else if(sc == hei*3){
            $(".logo4").fadeIn(1000);
        }
        else{
            $(".boxWrap >div >a").fadeOut();
        }



    });



});
