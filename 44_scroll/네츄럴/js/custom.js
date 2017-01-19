$(document).ready(function(){

    var hWrap = $(".headerWrap").scrollTop();
    var rgt = $(".right").offset().top;






    $(document).scroll(function(){

        var sc = $(this).scrollTop();
        $(".box").text(sc);

/*

        if(sc > hWrap){

            $(".headerWrap").addClass("fix");

        }
        else if(sc ==0 ){

            $(".headerWrap").removeClass("fix");

        }
*/


        if(sc >= rgt ){

            $(".right").addClass("fix");
        }

        else if(sc < rgt ){

            $(".right").removeClass("fix");
        }


    });

    // top 누르면 상위로 이동


    $(".top").click(function(){

        var sc = $(document).scrollTop();

        sc = 0;

    });




    //슬라이더

    $(".prev").click(function(){

        $(".panel").animate({"margin-left":"-200%"},500,function(){

            $(".panel li").first().appendTo(".panel");
            $(".panel").css({"margin-left":"-100%"});

        });


    });


    $(".next").click(function(){

        $(".panel").animate({"margin-left":"0%"},500,function(){

            $(".panel li").last().prependTo(".panel");
            $(".panel").css({"margin-left":"-100%"});

        });


    });



});
