$(document).ready(function(){


    var b1 = $(".box1").offset().top;
    var b2 = $(".box2").offset().top;
    var b3 = $(".box3").offset().top;
    var b4 = $(".box4").offset().top;

    var sc = $(document).scrollTop();



    //스크롤 했을때 위치에 맞는 div로 이동
    //클릭한 버튼에 클래스 주기
    $(document).scroll(function(){

        sc = $(this).scrollTop();


        if( sc >= b1 && sc < b2){
            sc = b1;
            $(".right_menu li").removeClass("on");
            $(".right_menu li").eq(0).addClass("on");
        }
        else if( sc >= b2 && sc < b3){
            sc = b2;
            $(".right_menu li").removeClass("on");
            $(".right_menu li").eq(1).addClass("on");
        }
        else if( sc >= b3 && sc < b4){
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



    //부드럽게 이동

    $(".right_menu li").click(function(e){

        e.preventDefault(); //이거 안하면 <a>기능 때문에 깜빡거림

        //클릭한 li의 a의 href 속성값 => #box1,#box2,#box3,#box4
        var href= $(this).children("a").attr("href");

        //클릭한 li의 속성값의 top
        //ex : 첫번째 li를 클릭했다면 href = $("#box1").offset().top;
        //$(href).offset().top;  이걸 응용해서 move 변수 생성
        var move = $(href).offset().top;

        //alert(move);

        $("body").animate({"scrollTop":move});


    });


});
