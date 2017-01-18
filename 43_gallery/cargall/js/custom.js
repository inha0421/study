$(document).ready(function(){

    $(".list li").click(function(e){

        e.preventDefault(); //기본값 정지

        var src = $(this).children("img").attr("src");
        var pointer = $(this).index();
        //alert(src);

        //alert(pointer);

        $(".view img").attr("src",src);

        // li태그에 on 클래스 처리

        $(".list li").removeClass("on");
        $(this).addClass("on");

    });


});
