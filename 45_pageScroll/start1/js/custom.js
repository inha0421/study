$(document).ready(function(){


    var i = $(".right_menu .on").index();
    var len = $(".right_menu li").length;

    var b1 = $(".box1").offset().top;
    var b2 = $(".box2").offset().top;
    var b3 = $(".box3").offset().top;
    var b4 = $(".box4").offset().top;

    var sc = $(document).scrollTop();


    //클릭한 버튼에 클래스 주기

       $(".right_menu li").click(function(){

           $(".right_menu li").removeClass("on");
           $(this).addClass("on");

       });




   //스크롤 했을때 위치에 맞는 div로 이동

    $(document).scroll(function(){

        sc = $(this).scrollTop();


        if( sc >= b1 && sc < b2){
            sc = b1;
            $(".right_menu li").removeClass("on");
            $(".right_menu li").eq(0).addClass("on");
        }
        else if( sc > b2 && sc < b3){
            sc = b2;
            $(".right_menu li").removeClass("on");
            $(".right_menu li").eq(1).addClass("on");
        }
        else if( sc > b3 && sc < b4){
            sc = b3;
            $(".right_menu li").removeClass("on");
            $(".right_menu li").eq(2).addClass("on");
        }
        else if( sc >= b4){
            sc = b4;
            $(".right_menu li").removeClass("on");
            $(".right_menu li").eq(3).addClass("on");
        }


    });
});
