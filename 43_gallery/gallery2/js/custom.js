$(function(){

	$(".list li").on("click",function(e){
		e.preventDefault();
		var sc = $(this).children("a").attr("href");
		var imgSrc = 'url(' +  sc  + ')'  ;

		$(".view").before('<div class="view"></div>');
		$(".view").eq(0).css({"background-image" : imgSrc});
		$(".view").eq(1).fadeOut(500,function(){
			$(this).remove();
		});

		$(".list li").removeClass("on");
		$(this).addClass("on");

        $(".mask").show();

		setTimeout(function(){
			$(".mask").hide();
		},900);

	});



});










