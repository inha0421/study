$(document).ready(function(){


    var b1 = $("#box1").offset().top;
    var b2 = $("#box2").offset().top;
    var b3 = $("#box3").offset().top;
    var b4 = $("#box4").offset().top;


    $(".wrap > div").on("mousewheel",function(event,delta){

		//마우스 휠을 올렸을때
          if (delta > 0) {

            var prev_b = $(this).prev().offset().top;

            $("body").stop().animate({"scrollTop":prev_b});


          }

        //마우스 휠을 내렸을때
        else if (delta < 0) {

            var next_b = $(this).next().offset().top;

            $("body").stop().animate({"scrollTop":next_b});

          }

    });



});
