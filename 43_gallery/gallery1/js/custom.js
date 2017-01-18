$(function(){


	$(".list li").on("click",function(e){
		e.preventDefault();
		var imgSrc = $(this).children("a").attr("href");
		/* $(".view").css({"background-image" :  'url(' + imgSrc + ')'   }); */
        $(".view").css({"background-image":"url(" + imgSrc + ")"});
		$(".list li").removeClass("on");
		$(this).addClass("on");
	});



});










