$(document).ready(function(){

    $(".prev").click(function(){

        $(".panel").animate({"margin-left":"-200%"},500,function(){

            $(".panel > li").eq(0).appendTo(".panel");
            $(".panel").css({"margin-left":"-100%"});
        });

    });

    $(".next").click(function(){

         $(".panel").animate({"margin-left":"0%"},500,function(){

            $(".panel > li").eq(2).prependTo(".panel");
            $(".panel").css({"margin-left":"-100%"});
        });

    });

});


