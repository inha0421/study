$(document).ready(function(){


    var toggle = $(".menu >ul >li >a").hasClass("color");


    //하위 ul 보이기
    //상위 li의 span의 글씨색(color) 및 배경(zz/aa) 바꾸기



    $(".menu > ul > li >a").click(function(){


        $(this).addClass("color");

        if(toggle){

            $(this).siblings("ul").addClass("show");
            $(this).children("span").addClass("aa");
            $(this).removeClass("color");
        }

        else{

            $(this).siblings("ul").removeClass("show");

            $(this).children("span").removeClass("aa");
            $(this).addClass("color");

        }


    });



















/*
    //하위 ul 보이기
    //상위 li의 span의 글씨색(color) 및 배경(zz/aa) 바꾸기
    $(".menu > ul > li > a").click(function(){

        $(this).siblings("ul").toggleClass("show");
        $(this).toggleClass("color");
        $(this).children("span").toggleClass("aa")



    });


*/





});
