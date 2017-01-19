$(document).ready(function(){

    $(document).scroll(function(){

        var sc = $(this).scrollTop();

        $("header").text("scroll top : " +sc);
        $("section").text("scroll top : " +sc);
        $("footer").text("scroll top : " +sc);


        if(sc >50){
            $("header").addClass("fix");
        }

        else if(sc == 0){
            //스크롤 하지 않았을 때, 혹은 맨위로 다시 갔을때 사라짐

            $("header").removeClass("fix");

        }



        // 일정 위치되면 페이지 상단으로 이동하게 하는 버튼 보이게 하기

        if(sc > 150){

            $(".left_fix").fadeIn(500);

        }

        else if(sc <149){

            $(".left_fix").fadeOut(500);
        }


    });


});
