$(document).ready(function(){


    $(".acodi .menu >li span").click(function(){

        var toggle = $(this).hasClass("on");
        //toggle = 클.릭.한 li 가 on 클래스 갖고 있는지 없는지에 대한 변수

        if(toggle){ //on클래스가 있으면(true이면)

            $(this).siblings("ul").slideUp(500);
            //클릭한 span의 형제 ul가 사라지게 한 후

            $(this).removeClass("on"); //다시 on 클래스 제거
        }

        else{

            $(".acodi .menu >li span").siblings("ul").slideUp(500);
            $(".acodi .menu >li span").removeClass("on");


            $(this).siblings("ul").slideDown(500);//형제 ul등장 후
            $(this).addClass("on"); //on 클래스 추가
        }

    });


});
