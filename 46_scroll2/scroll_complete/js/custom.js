$(document).ready(function(){

	//변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);

	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).resize(function(){
		var ht = $(window).height();
		$("section").height(ht);
	});


	//메뉴 버튼 클릭시
	$("#menu li").on("click",function(e){
		e.preventDefault();

		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();

		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();

		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;

		//해당 스크롤 위치값으로 문서를 이동
		$("body").stop().animate({"scrollTop":nowTop},1400);
	});


	$(window).scroll(function(){

		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();

		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();


		if(scroll>=ht*0 && scroll< ht*1){
			$("#menu li").removeClass("on");
			$("#menu li").eq(0).addClass("on");
		}
		if(scroll>=ht*1 && scroll< ht*2){
			$("#menu li").removeClass("on");
			$("#menu li").eq(1).addClass("on");
		}
		if(scroll>=ht*2 && scroll< ht*3){
			$("#menu li").removeClass("on");
			$("#menu li").eq(2).addClass("on");
		}
		if(scroll>=ht*3 && scroll< ht*4){
			$("#menu li").removeClass("on");
			$("#menu li").eq(3).addClass("on");
		}

	});

});















