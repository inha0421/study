$(document).ready(function(){

    $(".toggle p").click(function(){

        $(".toggle").toggleClass("on");
        $(".toggle p").toggleClass("on2");

    });


    $(".menu li").click(function(e){

        e.preventDefault();

        var list = $(this).index() +1;


        $(".toggle ul li").removeClass("on3");
        $(this).addClass("on3");

        $("center").css({"background-image":"url(../img/bg"+list+".jpg)"});

    });





});
