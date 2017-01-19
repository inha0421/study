$(document).ready(function(){


    var top = $(".right").offset().top; //.right의 시작 top 위치

    //offset : html 태그의 시작위치

    //alert(top);

    $(document).scroll(function(){

        var sc = $(this).scrollTop();

        if(sc >= top ){

            $(".right").addClass("fix");

           }

        else if(sc < top ){

            $(".right").removeClass("fix");

           }



    });






});
