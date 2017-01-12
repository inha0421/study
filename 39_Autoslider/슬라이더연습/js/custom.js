$(document).ready(function(){

    //전역변수 선언

    var i = $(".btn .on").index(); //on클래스가 붙어있는 애 찾기
    var wid = $(".slider").width();
    var len = $(".btn li").length; //()붙이지마!



    //버튼에 on 클래스처리

    $(".btn >li").click(function(){

        $(".btn >li").removeClass("on");
        $(this).addClass("on");

    });


    //prev 버튼 구현

    $(".prev").click(function(){

        if(i==0){
            i = len-1;
        }
        else{
            i= i-1;
        }

        $(".btn li").removeClass("on");
        $(".btn li").eq(i).addClass("on");
        $(".panel").animate({"margin-left":-wid*i},500);

    });



    //next 버튼 구현

        $(".next").click(function(){

            if(i==len-1){
                i = 0;
            }
            else{
                i = i+1;
            }

            $(".btn li").removeClass("on");
            $(".btn li").eq(i).addClass("on");
            $(".panel").animate({"margin-left":-wid*i},500);


        });


    //btn 버튼으로 슬라이드 화면 이동

    $(".btn li").click(function(){

        i = $(this).index();

        $(".btn li").removeClass("on");
        $(".btn li").eq(i).addClass("on");
        $(".panel").animate({"margin-left":-wid*i},500);


    });



});


