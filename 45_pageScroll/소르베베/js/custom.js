$(document).ready(function(){

        var h = $("header").offset().top;
        var q = $(".quick").offset().top;

    $(document).scroll(function(){


        var sc = $(this).scrollTop();



        //header fix

        if(sc >= 96){
            $("header").addClass("fix");
        }

        else if (sc == 0){
            $("header").removeClass("fix");
        }


        //quick fix
        if(sc >= q){
            $(".quick").addClass("fix");
        }

        else if (sc < q){
            $(".quick").removeClass("fix");
        }


    });


    //버튼 클릭했을때 해당 화면으로 부드럽게 이동

    $(".quick ul li").click(function(e){

        e.preventDefault();

        var href = $(this).children("a").attr("href");

        var move = $(href).offset().top;

        $("body").animate({"scrollTop":move});


    });





    //슬라이더

    var i = $(".navi .on").index();
    var wid = $(".slider").width();
    var len = $(".navi li").length;


    $(".navi li").click(function(){

        $(".navi li").removeClass("on");
        $(this).addClass("on");

    });

    $(".navi li").click(function(){

        i = $(this).index();

        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");

        $(".panel").animate({"margin-left":-wid *i},500);

    });


    //이미지 호버

    var l = $(".left img").index();
    var len_left = $(".left img").length;

    $(".left img").mouseenter(function(){

        l = $(this).index();

        if(l==0){
            $(this).eq(0).attr("src","img/cont2/medical_over.jpg");
        }

        else if(l ==1){
            $(this).eq(0).attr("src","img/cont2/robicplus_md_over.jpg");
        }

    });
    $(".left img").mouseleave(function(){

        l = $(this).index();

        if(l==0){
            $(this).eq(0).attr("src","img/cont2/medical.jpg");
        }

        else if(l ==1){
            $(this).eq(0).attr("src","img/cont2/robicplus_md.jpg");
        }

    });

    $(".center img").mouseenter(function(){

        l = $(this).index();

        if(l==0){
            $(this).attr("src","img/cont2/news_over.png");
        }

        else if(l ==1){
            $(this).attr("src","img/cont2/luna_over.jpg");
        }
        else if(l ==2){
            $(this).attr("src","img/cont2/postscript_over.png");
        }

    });
    $(".center img").mouseleave(function(){

        l = $(this).index();

        if(l==0){
            $(this).attr("src","img/cont2/news.png");
        }

        else if(l ==1){
            $(this).attr("src","img/cont2/luna.jpg");
        }
        else if(l ==2){
            $(this).attr("src","img/cont2/postscript.png");
        }

    });
    $(".right img").mouseenter(function(){

        l = $(this).index();

        if(l==0){
            $(this).attr("src","img/cont2/event_over.png");
        }

        else if(l ==1){
            $(this).attr("src","img/cont2/sormom_over.png");
        }
        else if(l ==2){
            $(this).attr("src","img/cont2/cs_center_ov.jpg");
        }

    });
    $(".right img").mouseleave(function(){

        l = $(this).index();

        if(l==0){
            $(this).attr("src","img/cont2/event.png");
        }

        else if(l ==1){
            $(this).attr("src","img/cont2/sormom.png");
        }
        else if(l ==2){
            $(this).attr("src","img/cont2/cs_center.jpg");
        }

    });


    //family


    $(".family p").click(function(e){

        e.preventDefault();

        $(".family ul").toggleClass("toggle");

    });



});
