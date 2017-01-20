$(document).ready(function(){


    var h = $("header").offset().top;

    var b1 = $(".div1").offset().top;
    var b2 = $(".div2").offset().top;
    var b3 = $(".div3").offset().top;
    var b4 = $(".div4").offset().top;
    var b5 = $(".div5").offset().top;

    var sc = $(document).scrollTop();


    $(document).scroll(function(){

        sc = $(this).scrollTop();


        //상단 (header) fix처리

        if(sc >= h){
            $("header").addClass("fix");
        }

        else if(sc < h){
            $("header").removeClass("fix");
        }








        if(sc >= b1 && sc < b2){


            $(".btn li").removeClass("on");
            $(".btn li").eq(0).addClass("on");

        }
        else if(sc >= b2 && sc < b3){



            $(".btn li").removeClass("on");
            $(".btn li").eq(1).addClass("on");

        }
        else if(sc >= b3 && sc < b4){

            $(".btn li").removeClass("on");
            $(".btn li").eq(2).addClass("on");

        }
        else if(sc >= b4 && sc < b5){



            $(".btn li").removeClass("on");
            $(".btn li").eq(3).addClass("on");

        }
        else if(sc >= b5){



            $(".btn li").removeClass("on");
            $(".btn li").eq(4).addClass("on");

        }




    });

    //버튼 클릭했을때 해당 화면으로 부드럽게 이동

    $(".btn li").click(function(e){

        e.preventDefault();

        var href = $(this).children("a").attr("href");

        var move = $(href).offset().top;

        $("body").animate({"scrollTop":move});



    });







});
