$(document).ready(function(){





    $(".acodi .menu >li span").click(function(){

        var toggle = $(this).hasClass("on");

        if(toggle){

            $(this).siblings("ul").slideUp(500);
            $(this).removeClass("on");

        }

        else{

            $(this).siblings("ul").slideDown(500);
            $(this).addClass("on");

        }

    });


});
