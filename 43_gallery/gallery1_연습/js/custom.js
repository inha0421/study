$(document).ready(function(){

    $(".list li a").click(function(e){

        e.preventDefault(); //기본값 정지

        var pointer = $(this).index();
        var src = $(this).attr("href");
        /* attr : 해당 html태그의 원하는 속성을 갖고 오는 구문*/

        //alert(src); 결과는 img/pic_1.jpg...

        //var src = $(this).attr("href,img/pic3.jpg");
        //href의 속성을 뒤의 img/pic3.jpg로 바꾸라는 뜻


        // .view의 css 배경이미지를 src로 변경
        $(".view").css({"background-image":"url(../"+src+")"});


        // li태그에 on 클래스 처리
        $(".list li").removeClass("on");
        $(this).parent("li").eq(pointer).addClass("on");


    });



});
