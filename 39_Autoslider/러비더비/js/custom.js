$(document).ready(function(){


    //전역변수 선언

    var i = $(".btn on").index();
    var wid = $(".slider").width();
    var len = $(".btn li").length;


    //버튼에 on 클래스처리

    $(".btn li").click(function(){

        $(".btn li").removeClass("on");
        $(this).addClass("on");

    });



    //prev 버튼 구현

    $(".prev").click(function(){

        if(i == 0){
            i = len-1;
        }
        else{
            i= i-1;
        }

        Sliding();

    });


    //next 버튼 구현

    $(".next").click(function(){

        if(i == len-1){
            i = 0;
        }
        else{
            i= i+1;
        }

        Sliding();

    });



    //btn 버튼으로 슬라이드 화면 이동

    $(".btn li").click(function(){

        i = $(this).index();

        Sliding();

    });




    // 슬라이드 재생

    function Sliding(){

        $(".btn li").removeClass("on");
        $(".btn li").eq(i).addClass("on");
        $(".panel").animate({"margin-left": -wid * i },500);

    }



    //슬라이드 자동실행

    var auto = setInterval(function(){


        //next버튼 클릭시 구현 기능

        if (i == len - 1) {
            i = 0;
        }
        else {
            i = i + 1;
        }
        Sliding();

    },1000); //자동실행 함수(실행 할 내용,몇 초 마다);




    //슬라이더 마우스오버시 정지

    $(".slider").mouseenter(function(){

        clearInterval(auto); //중지하는 함수(중지 할 변수 이름);

    });


    //슬라이더 마우스리브 시 다시 실행

    $(".slider").mouseleave(function(){

        auto = setInterval(function(){

            if (i == len - 1) {
                i = 0;
            }
            else {
                i = i + 1;
            }
            Sliding();

        },1000);

    });


});
